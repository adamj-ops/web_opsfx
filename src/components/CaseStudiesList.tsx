'use client'

import { useEffect, useState } from 'react'
import { CaseStudy } from '../../types/supabase'
import { supabase } from '@/lib/supabase'

export default function CaseStudiesList() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCaseStudies() {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching case studies:', error)
        return
      }

      setCaseStudies(data || [])
      setLoading(false)
    }

    fetchCaseStudies()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading case studies...</div>
  }

  return (
    <div className="space-y-12 py-8">
      {caseStudies.map((study) => (
        <div
          key={study.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{study.client_name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{study.industry}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3">The Challenge</h4>
              <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Our Solution</h4>
              <p className="text-gray-600 dark:text-gray-300">{study.solution}</p>
            </div>
          </div>

          {study.results && (
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Key Results</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.entries(study.results).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center"
                  >
                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {key.split('_').join(' ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 