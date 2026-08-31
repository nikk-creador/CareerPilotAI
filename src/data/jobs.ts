import type { CandidateProfile, Job } from '../types'

export const candidate: CandidateProfile = {
  name: 'Alex Kim',
  email: 'alex@university.ca',
  role: 'Computer Science student',
  readinessScore: 82,
  completion: 82,
  skills: ['React', 'TypeScript', 'Python', 'SQL', 'Figma'],
}

export const jobs: Job[] = [
  { id: 'shopify-se', company: 'Shopify', role: 'Software Engineering Intern', location: 'Toronto, ON', workMode: 'Hybrid', salary: '$28–36/hr', matchScore: 96, type: 'Internship', logo: 'S', tone: 'shopify', postedAt: '12m ago', skills: ['React', 'TypeScript', 'Node.js'], description: 'Build thoughtful merchant experiences with a high-impact product engineering team.', visaSupport: true },
  { id: 'cohere-ml', company: 'Cohere', role: 'Machine Learning Intern', location: 'Toronto, ON', workMode: 'Remote', salary: '$35–42/hr', matchScore: 92, type: 'Internship', logo: 'C', tone: 'cohere', postedAt: '24m ago', skills: ['Python', 'PyTorch', 'LLMs'], description: 'Help shape the next generation of enterprise language models.', visaSupport: true },
  { id: 'rbc-data', company: 'RBC', role: 'Data Analyst Co-op', location: 'Toronto, ON', workMode: 'Hybrid', salary: '$25–31/hr', matchScore: 88, type: 'Co-op', logo: 'R', tone: 'rbc', postedAt: '38m ago', skills: ['SQL', 'Python', 'Tableau'], description: 'Turn customer data into clear decisions for a leading Canadian bank.', visaSupport: false },
  { id: 'waabi-fe', company: 'Waabi', role: 'Frontend Developer Intern', location: 'Toronto, ON', workMode: 'On-site', salary: '$27–34/hr', matchScore: 84, type: 'Internship', logo: 'W', tone: 'waabi', postedAt: '1h ago', skills: ['React', 'Figma', 'Next.js'], description: 'Create beautiful, accessible tooling for autonomous vehicle operations.', visaSupport: true },
  { id: 'linear-product', company: 'Linear', role: 'Product Design Intern', location: 'Remote — Canada', workMode: 'Remote', salary: '$30–38/hr', matchScore: 79, type: 'Internship', logo: 'L', tone: 'linear', postedAt: '2h ago', skills: ['Figma', 'Research', 'Prototyping'], description: 'Design calm, opinionated software for modern product teams.', visaSupport: false },
  { id: 'figma-dev', company: 'Figma', role: 'Developer Experience Co-op', location: 'Toronto, ON', workMode: 'Hybrid', salary: '$31–39/hr', matchScore: 77, type: 'Co-op', logo: 'F', tone: 'figma', postedAt: '3h ago', skills: ['TypeScript', 'APIs', 'React'], description: 'Make the Figma platform easier and more delightful for developers.', visaSupport: true },
]
