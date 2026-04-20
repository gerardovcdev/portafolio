import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gerardo Vargas — Full Stack Software Engineer',
  description:
    'Full Stack Software Engineer with 4+ years of experience building scalable web applications, e-commerce platforms, and real-time systems.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'React',
    'Vue.js',
    'Node.js',
    'NestJS',
    'TypeScript',
    'AWS',
    'Remote',
  ],
  authors: [{ name: 'Gerardo Vargas' }],
  openGraph: {
    title: 'Gerardo Vargas — Full Stack Software Engineer',
    description:
      'Building scalable web applications, e-commerce platforms, and real-time systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-dm bg-bg-primary text-text-primary antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
