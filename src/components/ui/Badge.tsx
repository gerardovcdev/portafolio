import { cn } from '@/lib/utils'

interface BadgeProps {
  label: string
  className?: string
}

export default function Badge({ label, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium',
        'bg-[#1A1A1A] text-[#A0A0A0] border border-[#2A2A2A]',
        'hover:border-accent hover:text-accent transition-colors duration-200',
        className
      )}
    >
      {label}
    </span>
  )
}
