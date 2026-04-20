'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, Mail } from 'lucide-react'
import Script from 'next/script'
import { useLanguage } from '@/context/LanguageContext'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any
    }
  }
}

const heroText = {
  en: {
    badge: 'Available for hire',
    line1: 'Gerardo Vargas',
    line2: 'Full Stack Engineer',
    description:
      'I build scalable web applications and real-time systems that drive revenue and deliver exceptional user experiences.',
    cta1: "Let's Work Together",
    cta2: 'View Projects',
    stat1: '4+ Years',
    stat1label: 'Experience',
    stat2: '10+',
    stat2label: 'Projects',
    stat3: 'Remote',
    stat3label: 'Ready',
    scroll: 'Scroll down',
  },
  es: {
    badge: 'Disponible para trabajar',
    line1: 'Gerardo Vargas',
    line2: 'Ingeniero Full Stack',
    description:
      'Construyo aplicaciones web escalables y sistemas en tiempo real que impulsan ingresos y ofrecen experiencias de usuario excepcionales.',
    cta1: 'Trabajemos Juntos',
    cta2: 'Ver Proyectos',
    stat1: '4+ Años',
    stat1label: 'Experiencia',
    stat2: '10+',
    stat2label: 'Proyectos',
    stat3: 'Remote',
    stat3label: 'Ready',
    scroll: 'Scroll',
  },
}

export default function Hero() {
  const { lang } = useLanguage()
  const text = heroText[lang]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  }

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 opacity-100 mix-blend-normal pointer-events-none sm:pointer-events-auto">
        <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.86/build/spline-viewer.js" strategy="afterInteractive" />
        <spline-viewer url="https://prod.spline.design/1vamBVInfnjsA-uk/scene.splinecode" style={{ width: '100%', height: '100%' }}></spline-viewer>
      </div>

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(rgba(192, 132, 252, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192, 132, 252, 0.05) 1px, transparent 1px)',
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 pointer-events-none"
      >
        {/* Available Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A2A2A] bg-[#111111] text-sm font-dm text-[#A0A0A0]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            {text.badge}
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F5] tracking-tight leading-none mb-4"
        >
          {text.line1}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="font-syne font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-8 text-gradient-accent"
        >
          {text.line2}
          <span className="cursor-line ml-1" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-lg font-dm text-[#717171] leading-relaxed mb-10"
        >
          {text.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 pointer-events-auto"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-accent text-[#080808] text-sm font-bold font-dm hover:opacity-90 transition-opacity active:scale-95 shadow-[0_0_20px_rgba(192,132,252,0.3)] hover:shadow-[0_0_30px_rgba(192,132,252,0.5)]"
          >
            <Mail size={16} strokeWidth={2.5} />
            {text.cta1}
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-md border border-[#333333] text-[#F5F5F5] text-sm font-medium font-dm hover:border-accent hover:text-accent transition-colors active:scale-95"
          >
            {text.cta2}
            <ArrowRight size={15} strokeWidth={2} />
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {[
            { value: text.stat1, label: text.stat1label },
            { value: text.stat2, label: text.stat2label },
            { value: text.stat3, label: text.stat3label },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-syne font-bold text-3xl text-[#F5F5F5]">{stat.value}</div>
              <div className="font-dm text-sm text-[#717171] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-dm text-[#3A3A3A] tracking-widest uppercase">{text.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-[#3A3A3A]"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
