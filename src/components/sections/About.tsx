'use client'
import { motion } from 'framer-motion'
import { MapPin, Globe, GraduationCap, Calendar } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioData } from '@/data/portfolio'
import SectionTitle from '@/components/ui/SectionTitle'

const aboutLabels = {
  en: {
    number: '01',
    title: 'About Me',
    subtitle: 'Engineer with a product mindset.',
    location: 'Venezuela (Remote)',
    english: 'English B2',
    spanish: 'Spanish Native',
    eduTitle: 'Education',
    addInfo: 'Additional',
    remote: 'Remote-ready',
    ownership: 'Full product ownership',
    crossfunctional: 'Cross-functional teams',
  },
  es: {
    number: '01',
    title: 'Sobre Mí',
    subtitle: 'Ingeniero con mentalidad de producto.',
    location: 'Venezuela (Remoto)',
    english: 'Inglés B2',
    spanish: 'Español Nativo',
    eduTitle: 'Educación',
    addInfo: 'Adicional',
    remote: 'Trabajo remoto',
    ownership: 'Ownership total de producto',
    crossfunctional: 'Equipos multifuncionales',
  },
}

export default function About() {
  const { lang, t } = useLanguage()
  const labels = aboutLabels[lang]
  const { about, education } = portfolioData

  const paragraphs = t(about).split('\n\n').filter(Boolean)

  return (
    <section id="about" className="bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div>
            <SectionTitle
              number={labels.number}
              title={labels.title}
              subtitle={labels.subtitle}
            />

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="font-dm text-[#A0A0A0] leading-relaxed text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Location & Language Chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                { icon: <MapPin size={13} />, label: labels.location },
                { icon: <Globe size={13} />, label: labels.english },
                { icon: <Globe size={13} />, label: labels.spanish },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111] border border-[#222222] text-xs font-dm text-[#A0A0A0]"
                >
                  <span className="text-accent">{chip.icon}</span>
                  {chip.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Education Card */}
            <div className="rounded-xl border border-[#222222] bg-[#111111] p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-accent" />
                <span className="font-syne font-bold text-[#F5F5F5] text-sm">{labels.eduTitle}</span>
              </div>
              <p className="font-syne font-bold text-[#F5F5F5] text-lg leading-tight">
                {t(education.degree)}
              </p>
              <p className="font-dm text-[#717171] text-sm mt-1">{education.institution}</p>
              <div className="flex items-center gap-1.5 mt-3 text-xs font-dm text-[#717171]">
                <Calendar size={12} className="text-accent" />
                {education.period}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="rounded-xl border border-[#222222] bg-[#111111] p-6">
              <span className="font-syne font-bold text-[#F5F5F5] text-sm block mb-4">{labels.addInfo}</span>
              <ul className="space-y-3">
                {[labels.remote, labels.ownership, labels.crossfunctional].map((item) => (
                  <li key={item} className="flex items-center gap-3 font-dm text-sm text-[#A0A0A0]">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
