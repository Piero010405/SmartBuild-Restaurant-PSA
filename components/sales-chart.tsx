"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { time: '12 AM', sales: 400 },
  { time: '2 AM', sales: 300 },
  { time: '4 AM', sales: 200 },
  { time: '6 AM', sales: 450 },
  { time: '8 AM', sales: 800 },
  { time: '10 AM', sales: 1200 },
  { time: '12 PM', sales: 1800 },
  { time: '2 PM', sales: 1400 },
  { time: '4 PM', sales: 900 },
  { time: '6 PM', sales: 2200 },
  { time: '8 PM', sales: 2800 },
  { time: '10 PM', sales: 2100 },
]

export default function SalesChart() {
  return (
    <Card className="bg-white border border-border shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-foreground">Daily Sales</CardTitle>
        <CardDescription>Sales trends throughout the day</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis
              dataKey="time"
              stroke="var(--color-muted-foreground)"
              style={{ fontSize: '0.875rem' }}
            />
            <YAxis stroke="var(--color-muted-foreground)" style={{ fontSize: '0.875rem' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: `1px solid var(--color-border)`,
                borderRadius: '0.75rem',
              }}
              labelStyle={{ color: 'var(--color-foreground)' }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="var(--color-primary)"
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
