'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company: '',
    message: '',
    interested_services: [] as string[],
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    const { error } = await supabase.from('leads').insert([formData])

    if (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
      return
    }

    setStatus('success')
    setFormData({
      full_name: '',
      email: '',
      company: '',
      message: '',
      interested_services: [],
    })
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const services = prev.interested_services.includes(service)
        ? prev.interested_services.filter((s) => s !== service)
        : [...prev.interested_services, service]
      return { ...prev, interested_services: services }
    })
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-green-600 mb-4">
          Thank you for reaching out!
        </h3>
        <p className="text-gray-600">
          We'll get back to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="full_name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="full_name"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.full_name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, full_name: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.company}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, company: e.target.value }))
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Interested Services
        </label>
        <div className="space-y-2">
          {['Web Development', 'DevOps Automation', 'Cloud Infrastructure'].map(
            (service) => (
              <label key={service} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.interested_services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  {service}
                </span>
              </label>
            )
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status === 'error' && (
        <div className="text-red-600 text-center">
          An error occurred. Please try again.
        </div>
      )}
    </form>
  )
} 