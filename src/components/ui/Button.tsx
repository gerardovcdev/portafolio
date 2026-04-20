'use client'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
  download?: boolean
  target?: string
  rel?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  download,
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-md font-dm font-medium text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-accent text-[#080808] hover:bg-accent-dim active:scale-95',
    outline:
      'border border-[#333333] text-[#F5F5F5] hover:border-accent hover:text-accent active:scale-95',
    ghost:
      'text-[#717171] hover:text-[#F5F5F5] active:scale-95',
  }

  if (href) {
    return (
      <a
        href={href}
        className={cn(base, variants[variant], className)}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  )
}
