# OpsFx Website

## Project Overview
OpsFx is an operations and automation-focused web and community development agency. This website serves as our digital showcase of capabilities and approach.

## Technology Stack
- Next.js 14 (App Router)
- React with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Firecrawl for competitive research

## Features
- Modern, responsive design
- Animated UI components
- Dark mode support
- SEO optimized
- Performance focused
- Modular architecture

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firecrawl API Key (for competitive research features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web_opsfx.git
cd web_opsfx
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your Firecrawl API key.

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`.

## Project Structure
```
src/
├── app/             # App router pages and layouts
├── components/      # Reusable React components
├── lib/            # Utility functions and configurations
├── styles/         # Global styles and Tailwind config
└── types/          # TypeScript type definitions
```

## Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Implement responsive design patterns
- Write clean, documented code
- Follow ESLint rules

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (when implemented)

## Deployment
The project is optimized for deployment on Vercel:
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically with git push

## Roadmap
- [ ] Complete service pages
- [ ] Implement case studies
- [ ] Add contact forms
- [ ] Develop community resources section

## Design Inspiration
Inspired by modern, minimalist design principles with a focus on technical elegance.

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 