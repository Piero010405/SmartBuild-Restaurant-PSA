"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const orders = [
  { id: '#2847', customer: 'John Doe', items: 3, total: '$87.50', status: 'Delivered', time: '2:30 PM' },
  { id: '#2846', customer: 'Sarah Smith', items: 2, total: '$54.25', status: 'In Progress', time: '2:15 PM' },
  { id: '#2845', customer: 'Mike Johnson', items: 4, total: '$125.00', status: 'Delivered', time: '2:00 PM' },
  { id: '#2844', customer: 'Emma Wilson', items: 2, total: '$45.75', status: 'Preparing', time: '1:45 PM' },
  { id: '#2843', customer: 'David Brown', items: 5, total: '$156.80', status: 'Delivered', time: '1:30 PM' },
  { id: '#2842', customer: 'Lisa Anderson', items: 1, total: '$28.50', status: 'Delivered', time: '1:15 PM' },
  { id: '#2841', customer: 'James Taylor', items: 3, total: '$92.30', status: 'In Progress', time: '1:00 PM' },
  { id: '#2840', customer: 'Rachel White', items: 2, total: '$67.40', status: 'Preparing', time: '12:45 PM' },
  { id: '#2839', customer: 'Chris Davis', items: 4, total: '$134.50', status: 'Delivered', time: '12:30 PM' },
  { id: '#2838', customer: 'Sophie Martinez', items: 2, total: '$51.90', status: 'Delivered', time: '12:15 PM' },
]

const statusColors = {
  'Delivered': 'bg-green-100 text-green-800',
  'In Progress': 'bg-blue-100 text-blue-800',
  'Preparing': 'bg-amber-100 text-amber-800',
  'Pending': 'bg-gray-100 text-gray-800',
}

export default function OrdersTable() {
  return (
    <Card className="bg-white border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-foreground">Latest Orders</CardTitle>
        <CardDescription>Recent customer orders from today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Items</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Total</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Time</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium text-primary">{order.id}</td>
                  <td className="py-3 px-4 text-foreground">{order.customer}</td>
                  <td className="py-3 px-4 text-foreground">{order.items}</td>
                  <td className="py-3 px-4 font-semibold text-foreground">{order.total}</td>
                  <td className="py-3 px-4">
                    <Badge className={`${statusColors[order.status as keyof typeof statusColors]}`}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{order.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
