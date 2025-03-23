export type CaseStudy = {
    id: string
    client_name: string
    industry: string | null
    challenge: string | null
    solution: string | null
    results: {
        [key: string]: string | number
    } | null
    created_at: string
}

export type Service = {
    id: string
    name: string
    description: string | null
    key_benefits: string[] | null
    created_at: string
}

export type Lead = {
    id: string
    full_name: string
    email: string
    company: string | null
    message: string | null
    interested_services: string[] | null
    created_at: string
}

export type Database = {
    case_studies: CaseStudy
    services: Service
    leads: Lead
} 