"use client"

import StatsCard from '@/components/stats-card'
import SalesChart from '@/components/sales-chart'
import OrdersTable from '@/components/orders-table'
import { ShoppingCart, Clock, AlertCircle } from 'lucide-react'

export default function DashboardContent() {
  return (
    <div className="p-8 space-y-8">
      {/* Page Title */}
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's your restaurant overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Today's Orders"
          value="186"
          change="+12% from yesterday"
          icon={ShoppingCart}
          color="primary"
        />
        <StatsCard
          title="Pending Reservations"
          value="42"
          change="+8% from yesterday"
          icon={Clock}
          color="secondary"
        />
        <StatsCard
          title="Inventory Alerts"
          value="7"
          change="3 critical items"
          icon={AlertCircle}
          color="accent"
        />
      </div>

      {/* Chart and Table Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart - Takes 2 columns on large screens */}
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground">Avg Order Value</span>
              <span className="font-semibold text-foreground">$42.50</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground">Peak Time</span>
              <span className="font-semibold text-foreground">7:30 PM</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground">Top Item</span>
              <span className="font-semibold text-foreground">Pasta Carbonara</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Staff On Duty</span>
              <span className="font-semibold text-foreground">12/15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div>
        <OrdersTable />
      </div>
    </div>
  )
}
