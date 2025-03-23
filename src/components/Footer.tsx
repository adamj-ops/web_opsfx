import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Work', href: '/work' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { name: 'Twitter', href: 'https://twitter.com/opsfx' },
      { name: 'LinkedIn', href: 'https://linkedin.com/company/opsfx' },
      { name: 'Instagram', href: 'https://instagram.com/opsfx' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold">
              OpsFx
            </Link>
            <p className="text-gray-400 max-w-xs">
              Empowering organizations with enterprise-grade no-code solutions for digital transformation.
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                123 Innovation Street<br />
                San Francisco, CA 94105
              </p>
              <a
                href="mailto:hello@opsfx.com"
                className="text-gray-400 hover:text-white transition-colors block"
              >
                hello@opsfx.com
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold"
              >
                Get in Touch
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OpsFx. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 