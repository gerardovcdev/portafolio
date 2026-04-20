'use client'
import { motion } from 'framer-motion'

interface SectionTitleProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-sm text-accent">{number}</span>
        <div className="flex-1 h-px bg-[#222222]" />
      </div>
      <h2 className="font-syne text-4xl md:text-5xl font-bold text-[#F5F5F5] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#717171] text-lg max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  )
}
