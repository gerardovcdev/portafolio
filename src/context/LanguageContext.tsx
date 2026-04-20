'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Language } from '@/types'

interface LanguageContextType {
  lang: Language
  toggleLanguage: () => void
  t: (obj: { en: string; es: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'es' : 'en'))
  }

  const t = (obj: { en: string; es: string }) => obj[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
