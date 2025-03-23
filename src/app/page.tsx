import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-[90rem] mx-auto text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8"
          >
            No-Code Digital
            <br />
            Transformation
          </motion.h1>
          
          <motion.p
            variants={fadeIn}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Transform your business operations with powerful no-code solutions. 
            We help organizations streamline processes and boost efficiency without writing a single line of code.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold"
            >
              Start Your Project
            </motion.button>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-black transition-colors text-lg font-semibold"
            >
              View Our Work →
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-[90rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their operations
              through innovative automation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-[16/9] bg-gray-100" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6">{project.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold"
                    >
                      View Case Study
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[90rem] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Let's discuss how we can help streamline your processes and boost efficiency
              through innovative automation solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-20 bg-black text-white overflow-hidden">
        <div className="marquee-container">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className="flex whitespace-nowrap text-6xl font-bold opacity-20"
          >
            AUTOMATION • EFFICIENCY • INNOVATION • TRANSFORMATION • 
            AUTOMATION • EFFICIENCY • INNOVATION • TRANSFORMATION
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8">About OpsFx</h2>
              <p className="text-xl text-gray-600">
                We're not just another agency. We're experts in no-code digital transformation who understand
                that great solutions come from simplifying complex processes, not adding more complexity.
                Our approach empowers your team to achieve more with less technical overhead.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    title: 'Enterprise Workflow Automation',
    description: 'How we helped a Fortune 500 company automate their core business processes using no-code solutions, reducing operational costs by 60%.',
  },
  {
    title: 'Digital Workspace Transformation',
    description: "Transforming a 200-person company's scattered digital tools into a streamlined, no-code operational hub.",
  },
  {
    title: 'Process Optimization Suite',
    description: 'Building a comprehensive business process management system using no-code platforms, enabling rapid scaling and adaptation.',
  },
  {
    title: 'Automated Customer Service',
    description: 'Implementing an end-to-end customer service automation solution without traditional coding, improving response times by 80%.',
  },
]; 