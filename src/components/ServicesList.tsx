'use client'

import { useEffect, useState } from 'react'
import { Service } from '../../types/supabase'
import { supabase } from '@/lib/supabase'

export default function ServicesList() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchServices() {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching services:', error)
        return
      }

      setServices(data || [])
      setLoading(false)
    }

    fetchServices()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Loading services...</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-bold mb-4">{service.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {service.description}
          </p>
          {service.key_benefits && service.key_benefits.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Key Benefits:</h4>
              <ul className="list-disc list-inside space-y-1">
                {service.key_benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
} 