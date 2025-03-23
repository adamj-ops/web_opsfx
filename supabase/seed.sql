-- Seed data for services
INSERT INTO services (name, description, key_benefits) VALUES
(
    'Web Development',
    'Custom web applications built with modern technologies and best practices',
    ARRAY['Responsive design', 'Performance optimized', 'SEO friendly', 'Scalable architecture']
),
(
    'DevOps Automation',
    'Streamline your development and deployment processes with automated workflows',
    ARRAY['CI/CD pipeline setup', 'Infrastructure as Code', 'Monitoring & alerting', 'Cost optimization']
),
(
    'Cloud Infrastructure',
    'Secure and scalable cloud infrastructure design and implementation',
    ARRAY['Multi-cloud strategy', 'High availability', 'Security best practices', 'Disaster recovery']
);

-- Seed data for case studies
INSERT INTO case_studies (client_name, industry, challenge, solution, results) VALUES
(
    'TechStart Inc.',
    'SaaS',
    'Needed to scale their infrastructure to handle 10x user growth while maintaining performance',
    'Implemented a microservices architecture with auto-scaling and caching layers',
    '{"performance_improvement": "60%", "cost_reduction": "40%", "uptime": "99.99%"}'
),
(
    'EcoFlow Systems',
    'Clean Energy',
    'Required a real-time monitoring system for their renewable energy installations',
    'Built a custom IoT dashboard with real-time data processing and alerts',
    '{"monitoring_accuracy": "99%", "alert_response_time": "< 30 seconds", "energy_savings": "25%"}'
);

-- Note: We don't seed the leads table as it will be populated through the contact form 