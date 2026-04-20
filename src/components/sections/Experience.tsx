'use client'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioData } from '@/data/portfolio'
import SectionTitle from '@/components/ui/SectionTitle'
import Badge from '@/components/ui/Badge'

const expLabels = {
  en: { number: '02', title: 'Experience', subtitle: 'Where I have built things.' },
  es: { number: '02', title: 'Experiencia', subtitle: 'Dónde he construido cosas.' },
}

export default function Experience() {
  const { lang, t } = useLanguage()
  const labels = expLabels[lang]
  const { experience } = portfolioData

  return (
    <section id="experience" className="bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number={labels.number}
          title={labels.title}
          subtitle={labels.subtitle}
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#222222]" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-[11px] md:left-[19px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-[#111111]" />

                {/* Card */}
                <div className="rounded-xl border border-[#222222] bg-[#161616] p-6 hover:border-[#2A2A2A] transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-syne font-bold text-[#F5F5F5] text-xl">{exp.company}</h3>
                      <p className="font-dm text-accent text-sm mt-0.5">{t(exp.role)}</p>
                    </div>
                    <span className="font-mono text-xs text-[#717171] bg-[#1A1A1A] border border-[#222222] px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet List */}
                  <ul className="space-y-2 mb-5">
                    {(lang === 'en' ? exp.description.en : exp.description.es).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-dm text-sm text-[#A0A0A0] leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <Badge key={tech} label={tech} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
