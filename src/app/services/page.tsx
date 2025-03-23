import ServicesList from '@/components/ServicesList'

export const metadata = {
  title: 'Our Services - OpsFX',
  description:
    'Explore our comprehensive range of web development, DevOps, and cloud infrastructure services.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          We offer a comprehensive range of services to help businesses build,
          optimize, and scale their digital operations.
        </p>
        <ServicesList />
      </div>
    </div>
  )
} 