-- Create case studies table
CREATE TABLE case_studies (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    client_name TEXT NOT NULL,
    industry TEXT,
    challenge TEXT,
    solution TEXT,
    results JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    key_benefits TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create leads/contact form submissions
CREATE TABLE leads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT,
    interested_services TEXT[],
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policies for case_studies
CREATE POLICY "Enable read access for all users" ON case_studies
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON case_studies
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON case_studies
    FOR UPDATE USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Create policies for services
CREATE POLICY "Enable read access for all users" ON services
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON services
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users only" ON services
    FOR UPDATE USING (auth.role() = 'authenticated')
    WITH CHECK (auth.role() = 'authenticated');

-- Create policies for leads
CREATE POLICY "Enable insert for all users" ON leads
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for authenticated users only" ON leads
    FOR SELECT USING (auth.role() = 'authenticated'); 