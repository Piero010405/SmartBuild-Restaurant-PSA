"use client"

import { useState } from 'react'
import Link from 'next/link'
import { LayoutDashboard, ShoppingCart, Calendar, Package, Users, BarChart3, Settings, ChevronLeft, ChevronRight } from 'lucide-react'

interface SidebarProps {
  open: boolean
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '#' },
  { icon: ShoppingCart, label: 'Orders', href: '#' },
  { icon: Calendar, label: 'Reservations', href: '#' },
  { icon: Package, label: 'Inventory', href: '#' },
  { icon: Users, label: 'Staff', href: '#' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: Settings, label: 'Settings', href: '#' },
]

export default function Sidebar({ open }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <aside
      className={`${
        open ? 'w-64' : 'w-20'
      } bg-white border-r border-border transition-all duration-300 ease-in-out flex flex-col shadow-sm`}
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center justify-center px-4 border-b border-border">
        <div className={`flex items-center gap-3 ${!open && 'justify-center'}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">🍴</span>
          </div>
          {open && <span className="font-bold text-sm text-foreground">SmartBuild</span>}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label

          return (
            <button
              key={item.label}
              onClick={() => setActiveItem(item.label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'text-foreground hover:bg-secondary/30'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {open && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
    </aside>
  )
}
