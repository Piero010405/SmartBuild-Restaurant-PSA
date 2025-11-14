"use client"

import { type LucideIcon } from 'lucide-react'

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: 'primary' | 'secondary' | 'accent'
}

const colorClasses = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-foreground',
  accent: 'bg-accent text-white',
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
        </div>
        <div className={`${colorClasses[color]} p-3 rounded-xl`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <p className="text-sm text-primary font-medium">{change}</p>
    </div>
  )
}
