'use client'
import { motion } from 'framer-motion'
import { 
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiAstro, SiTypescript, SiTailwindcss, SiHtml5, 
  SiNodedotjs, SiNestjs, SiExpress, SiMongodb, SiMysql, SiServerless, SiGit, SiGithub, SiGitlab
} from 'react-icons/si'
import { FaAws, FaServer } from 'react-icons/fa'
import { Layers, Code, Cpu, Gauge, Smartphone, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { portfolioData } from '@/data/portfolio'
import SectionTitle from '@/components/ui/SectionTitle'

const iconMap: Record<string, React.ReactNode> = {
  'React': <SiReact className="text-[#61DAFB] text-lg" />,
  'Vue.js': <SiVuedotjs className="text-[#4FC08D] text-lg" />,
  'Angular': <SiAngular className="text-[#DD0031] text-lg" />,
  'Next.js': <SiNextdotjs className="text-white text-lg" />,
  'Astro': <SiAstro className="text-[#FF5A03] text-lg" />,
  'TypeScript': <SiTypescript className="text-[#3178C6] text-lg" />,
  'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4] text-lg" />,
  'HTML / CSS': <SiHtml5 className="text-[#E34F26] text-lg" />,
  'Node.js': <SiNodedotjs className="text-[#339933] text-lg" />,
  'NestJS': <SiNestjs className="text-[#E0234E] text-lg" />,
  'Express': <SiExpress className="text-white text-lg" />,
  'REST APIs': <FaServer className="text-[#717171] text-lg" />,
  'MongoDB': <SiMongodb className="text-[#47A248] text-lg" />,
  'MySQL': <SiMysql className="text-[#4479A1] text-lg" />,
  'AWS Lambda': <FaAws className="text-[#FF9900] text-lg" />,
  'AWS Cognito': <FaAws className="text-[#FF9900] text-lg" />,
  'Amazon IVS': <FaAws className="text-[#FF9900] text-lg" />,
  'Serverless': <SiServerless className="text-[#FD5750] text-lg" />,
  'Git': <SiGit className="text-[#F05032] text-lg" />,
  'GitHub': <SiGithub className="text-white text-lg" />,
  'GitLab': <SiGitlab className="text-[#FCA121] text-lg" />,
  'Scalable Architecture': <Layers className="text-[#717171] w-4 h-4" />,
  'API Design': <Code className="text-[#717171] w-4 h-4" />,
  'Real-time Systems': <Cpu className="text-[#717171] w-4 h-4" />,
  'Performance Optimization': <Gauge className="text-[#717171] w-4 h-4" />,
  'Responsive Design': <Smartphone className="text-[#717171] w-4 h-4" />,
}

const skillsLabels = {
  en: { number: '04', title: 'Skills', subtitle: 'Technologies I work with.' },
  es: { number: '04', title: 'Habilidades', subtitle: 'Tecnologías con las que trabajo.' },
}

export default function Skills() {
  const { lang, t } = useLanguage()
  const labels = skillsLabels[lang]
  const { skillCategories } = portfolioData

  return (
    <section id="skills" className="bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          number={labels.number}
          title={labels.title}
          subtitle={labels.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[#222222] bg-[#161616] p-5 hover:border-[#2A2A2A] transition-colors"
            >
              {/* Category Title */}
              <h3 className="font-syne font-bold text-accent text-sm tracking-wider uppercase mb-4">
                {t(category.label)}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: catIndex * 0.05 + skillIndex * 0.04 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#111111] border border-[#2A2A2A] text-xs font-dm font-medium text-[#A0A0A0] hover:border-[#444] transition-all duration-200 cursor-default"
                  >
                    {iconMap[skill] || <CheckCircle2 className="w-4 h-4 text-[#717171]" />}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
