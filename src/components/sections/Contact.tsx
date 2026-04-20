'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioData } from '@/data/portfolio'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

function GitlabIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L22.95 13.45a.84.84 0 0 1-.3.94z"/>
    </svg>
  )
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

const contactText = {
  en: {
    number: '05',
    title: "Let's Work Together",
    subtitle: "Got a project in mind, an open role, or just want to connect? My inbox is open.",
    emailLabel: 'Email me',
    orConnect: 'or connect on',
    availability: 'Currently available for remote opportunities.',
  },
  es: {
    number: '05',
    title: 'Trabajemos Juntos',
    subtitle: '¿Tienes un proyecto, una vacante o simplemente quieres conectar? Mi inbox está abierto.',
    emailLabel: 'Escríbeme',
    orConnect: 'o conéctate en',
    availability: 'Actualmente disponible para oportunidades remotas.',
  },
}

type SocialLink = {
  icon: React.ComponentType<{ size?: number }> | ((props: { size?: number }) => React.ReactNode)
  label: string
  key: string
}

const socialLinks: SocialLink[] = [
  { icon: GithubIcon, label: 'GitHub', key: 'github' },
  { icon: GitlabIcon, label: 'GitLab', key: 'gitlab' },
  { icon: LinkedinIcon, label: 'LinkedIn', key: 'linkedin' },
]

export default function Contact() {
  const { lang } = useLanguage()
  const text = contactText[lang]
  const { contact } = portfolioData

  return (
    <section id="contact" className="bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section number + line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#1A1A1A]" />
            <span className="font-mono text-sm text-accent">{text.number}</span>
            <div className="flex-1 h-px bg-[#1A1A1A]" />
          </div>

          {/* Title */}
          <h2 className="font-syne font-bold text-4xl md:text-6xl text-[#F5F5F5] tracking-tight mb-6">
            {text.title}
          </h2>

          {/* Subtitle */}
          <p className="font-dm text-[#717171] text-lg leading-relaxed mb-10">
            {text.subtitle}
          </p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-[#2A2A2A] bg-[#111111] hover:border-accent hover:bg-[#161616] transition-all duration-300 mb-10"
          >
            <Mail size={20} className="text-accent" />
            <span className="font-dm font-medium text-[#F5F5F5]">{contact.email}</span>
            <ArrowRight
              size={16}
              className="text-[#717171] group-hover:text-accent group-hover:translate-x-1 transition-all"
            />
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {socialLinks.map(({ icon: Icon, label, key }) => (
              <a
                key={key}
                href={contact[key as keyof typeof contact]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-dm text-sm text-[#717171] hover:text-[#F5F5F5] transition-colors"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>

          {/* Availability note */}
          <div className="flex items-center justify-center gap-2 mt-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="font-dm text-sm text-[#717171]">{text.availability}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
