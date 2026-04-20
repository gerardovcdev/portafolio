export type Language = 'en' | 'es'

export interface Project {
  id: string
  title: string
  description: {
    en: string
    es: string
  }
  longDescription: {
    en: string
    es: string
  }
  tech: string[]
  githubUrl: string | null
  demoUrl: string | null
  image: string
  featured: boolean
}

export interface ExperienceItem {
  id: string
  company: string
  role: {
    en: string
    es: string
  }
  period: string
  description: {
    en: string[]
    es: string[]
  }
  tech: string[]
}

export interface SkillCategory {
  id: string
  label: {
    en: string
    es: string
  }
  skills: string[]
}

export interface ContactInfo {
  email: string
  github: string
  gitlab: string
  linkedin: string
}

export interface PortfolioData {
  name: string
  role: { en: string; es: string }
  tagline: { en: string; es: string }
  about: { en: string; es: string }
  projects: Project[]
  experience: ExperienceItem[]
  skillCategories: SkillCategory[]
  contact: ContactInfo
  education: {
    degree: { en: string; es: string }
    institution: string
    period: string
  }
}
