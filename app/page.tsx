"use client"

import { useState } from 'react'
import Sidebar from '@/components/sidebar'
import TopNav from '@/components/top-nav'
import DashboardContent from '@/components/dashboard-content'

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar open={sidebarOpen} />
      <div className="flex flex-col flex-1">
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-secondary/5">
          <DashboardContent />
        </main>
      </div>
    </div>
  )
}
