'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Lock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioData } from '@/data/portfolio'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  )
}

const projLabels = {
  en: {
    number: '03',
    title: 'Projects',
    subtitle: 'Things I have built.',
    featured: 'Featured',
    other: 'Other Projects',
    private: 'Private Repo',
    demo: 'Live Demo',
    code: 'View Code',
  },
  es: {
    number: '03',
    title: 'Proyectos',
    subtitle: 'Cosas que he construido.',
    featured: 'Destacado',
    other: 'Otros Proyectos',
    private: 'Repo Privado',
    demo: 'Ver Demo',
    code: 'Ver Código',
  },
}

const projectGradients = [
  'from-[#1A1A2E] to-[#16213E]',
  'from-[#1A2E1A] to-[#162116]',
  'from-[#2E1A1A] to-[#211616]',
  'from-[#1A1E2E] to-[#161921]',
]

export default function Projects() {
  const { lang, t } = useLanguage()
  const labels = projLabels[lang]
  const { projects } = portfolioData

  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number={labels.number}
          title={labels.title}
          subtitle={labels.subtitle}
        />

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-[#222222] bg-[#111111] overflow-hidden hover:border-[#3A3A3A] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div
                className={`h-48 relative overflow-hidden`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-syne font-bold text-5xl text-white/5 select-none">
                        {project.title}
                      </span>
                    </div>
                  </div>
                )}
                {/* Featured badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-accent text-[#080808] text-xs font-mono font-medium">
                    {labels.featured}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {/* Title + Links */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-syne font-bold text-[#F5F5F5] text-xl">{project.title}</h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#717171] hover:text-[#F5F5F5] transition-colors"
                      >
                        <GithubIcon size={18} />
                      </a>
                    ) : (
                      <span className="text-[#3A3A3A]" title={labels.private}>
                        <Lock size={15} />
                      </span>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#717171] hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="font-dm text-sm text-[#717171] leading-relaxed mb-5">
                  {t(project.longDescription)}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {others.length > 0 && (
          <>
            <h3 className="font-syne font-bold text-[#F5F5F5] text-xl mb-6">{labels.other}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {others.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-[#222222] bg-[#111111] p-5 hover:border-[#3A3A3A] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-syne font-bold text-[#F5F5F5] text-lg">{project.title}</h4>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#717171] hover:text-[#F5F5F5] transition-colors">
                          <GithubIcon size={16} />
                        </a>
                      ) : (
                        <span className="text-[#3A3A3A]"><Lock size={14} /></span>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[#717171] hover:text-accent transition-colors">
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="font-dm text-sm text-[#717171] leading-relaxed mb-4">
                    {t(project.description)}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
