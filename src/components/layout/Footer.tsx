'use client'
import { Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioData } from '@/data/portfolio'

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function GitlabIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L22.95 13.45a.84.84 0 0 1-.3.94z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  const { lang } = useLanguage()
  const { contact, name } = portfolioData

  return (
    <footer className="border-t border-[#1A1A1A] bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <span className="font-syne font-bold text-[#F5F5F5]">
          GV<span className="text-accent">.</span>
        </span>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#717171] hover:text-[#F5F5F5] transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={contact.gitlab}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#717171] hover:text-[#F5F5F5] transition-colors"
          >
            <GitlabIcon size={18} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#717171] hover:text-[#F5F5F5] transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-[#717171] hover:text-[#F5F5F5] transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs font-dm text-[#3A3A3A]">
          © {new Date().getFullYear()} {name}.{' '}
          {lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.'}
        </p>
      </div>
    </footer>
  )
}
