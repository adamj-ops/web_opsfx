import CaseStudiesList from '@/components/CaseStudiesList'

export const metadata = {
  title: 'Case Studies - OpsFX',
  description:
    'Explore our success stories and see how we help businesses transform their operations.',
}

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Discover how we've helped businesses overcome challenges and achieve
          their goals through innovative solutions.
        </p>
        <CaseStudiesList />
      </div>
    </div>
  )
} 