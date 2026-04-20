'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Download, Menu, X, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const navLinks = {
  en: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  es: [
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ],
}

export default function Navbar() {
  const { lang, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { scrollYProgress } = useScroll()

  const links = navLinks[lang]

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#1A1A1A]'
            : 'bg-transparent'
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-syne font-bold text-lg text-[#F5F5F5] hover:text-accent transition-colors">
            GV<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-dm text-[#717171] hover:text-[#F5F5F5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="w-12 h-8 rounded-md border border-[#2A2A2A] text-xs font-mono font-medium text-[#717171] hover:border-accent hover:text-accent transition-all"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>

            {/* Contact CTA Button */}
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-[#080808] text-sm font-medium font-dm hover:bg-accent-dim transition-colors active:scale-95"
            >
              <Mail size={14} strokeWidth={2.5} />
              {lang === 'en' ? "Let's Talk" : 'Hablemos'}
            </a>
          </div>

          {/* Mobile Right */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="w-12 h-8 rounded-md border border-[#2A2A2A] text-xs font-mono text-[#717171] hover:border-accent hover:text-accent transition-all"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 text-[#717171] hover:text-[#F5F5F5] transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#111111] border-l border-[#1A1A1A] flex flex-col p-6"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-syne font-bold text-lg text-[#F5F5F5]">
                  GV<span className="text-accent">.</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[#717171] hover:text-[#F5F5F5] transition-colors"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 flex-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-syne font-bold text-[#F5F5F5] hover:text-accent transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* CV Button Mobile */}
              <a
                href="/cv/Gerardo_Vargas_CV.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-accent text-[#080808] text-sm font-medium font-dm hover:bg-accent-dim transition-colors"
              >
                <Download size={14} strokeWidth={2.5} />
                {lang === 'en' ? 'Download CV' : 'Descargar CV'}
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
