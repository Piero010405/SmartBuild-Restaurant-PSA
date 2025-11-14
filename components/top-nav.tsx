"use client"

import { Menu, Bell, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface TopNavProps {
  onMenuClick: () => void
}

export default function TopNav({ onMenuClick }: TopNavProps) {
  return (
    <header className="h-20 bg-white border-b border-border flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="hover:bg-secondary/20"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">SmartBuild Restaurant AI Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 bg-muted px-4 py-2 rounded-lg">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm placeholder-muted-foreground w-48"
          />
        </div>

        {/* Icons */}
        <Button variant="ghost" size="icon" className="hover:bg-secondary/20 relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></span>
        </Button>

        <Button variant="ghost" size="icon" className="hover:bg-secondary/20">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  )
}
