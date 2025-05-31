'use client';

import { BarChart3, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const metrics = [
  {
    title: 'Revenue Growth',
    value: '+24.5%',
    description: 'vs. previous month',
    icon: TrendingUp,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Average Occupancy',
    value: '94.2%',
    description: 'across all properties',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Operating Costs',
    value: '-5.8%',
    description: 'cost reduction',
    icon: DollarSign,
    gradient: 'from-orange-500 to-red-600'
  },
  {
    title: 'Lease Renewals',
    value: '85.3%',
    description: 'retention rate',
    icon: Calendar,
    gradient: 'from-purple-500 to-pink-600'
  },
];

const propertyPerformance = [
  {
    property: 'Office Complex A',
    revenue: '$125K',
    occupancy: '96%',
    trend: '+8.3%',
    status: 'increase'
  },
  {
    property: 'Retail Center B',
    revenue: '$98K',
    occupancy: '92%',
    trend: '+5.2%',
    status: 'increase'
  },
  {
    property: 'Industrial Park C',
    revenue: '$156K',
    occupancy: '98%',
    trend: '+12.1%',
    status: 'increase'
  },
  {
    property: 'Residential D',
    revenue: '$89K',
    occupancy: '91%',
    trend: '-2.4%',
    status: 'decrease'
  },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-2">Detailed insights and performance metrics</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
                <div className={`rounded-xl bg-gradient-to-r ${metric.gradient} p-2 text-white shadow-lg`}>
                  <metric.icon className="h-5 w-5" />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${metric.gradient} opacity-20`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Revenue Trends</h2>
            <div className="mt-4 aspect-[4/3] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <BarChart3 className="h-48 w-48 text-muted-foreground/20" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Chart will be implemented here</p>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Property Performance</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-left font-medium text-muted-foreground">Property</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Revenue</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Occupancy</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {propertyPerformance.map((property, index) => (
                    <tr key={index} className="group">
                      <td className="py-3 font-medium">{property.property}</td>
                      <td className="py-3 text-muted-foreground">{property.revenue}</td>
                      <td className="py-3 text-muted-foreground">{property.occupancy}</td>
                      <td className="py-3">
                        <span
                          className={`inline-flex items-center ${property.status === 'increase' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          {property.trend}
                          {property.status === 'increase' ? (
                            <TrendingUp className="ml-1 h-4 w-4" />
                          ) : (
                            <TrendingUp className="ml-1 h-4 w-4 rotate-180" />
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Occupancy Rates</h2>
            <div className="mt-4 aspect-[4/3] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Users className="h-48 w-48 text-muted-foreground/20" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Chart will be implemented here</p>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Cost Analysis</h2>
            <div className="mt-4 aspect-[4/3] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <DollarSign className="h-48 w-48 text-muted-foreground/20" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Chart will be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}