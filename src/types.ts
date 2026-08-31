export type JobType = 'Internship' | 'Co-op' | 'Part-time' | 'Graduate'
export type WorkMode = 'Remote' | 'Hybrid' | 'On-site'
export type ApplicationStatus = 'Saved' | 'Applied' | 'Interviewing' | 'Offer'

export interface Job {
  id: string
  company: string
  role: string
  location: string
  workMode: WorkMode
  salary: string
  matchScore: number
  type: JobType
  logo: string
  tone: 'shopify' | 'cohere' | 'rbc' | 'waabi' | 'linear' | 'figma'
  postedAt: string
  skills: string[]
  description: string
  visaSupport: boolean
}

export interface CandidateProfile {
  name: string
  email: string
  role: string
  readinessScore: number
  skills: string[]
  completion: number
}
