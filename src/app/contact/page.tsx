import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us - OpsFX',
  description:
    'Get in touch with us to discuss your project or learn more about our services.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Ready to transform your operations? Fill out the form below and we'll get
          back to you as soon as possible.
        </p>
        <ContactForm />
      </div>
    </div>
  )
} 