'use client';

import { Activity, TrendingUp, Users, Wallet } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const stats = [
  {
    title: 'Total Assets',
    value: '$2.4M',
    change: '+14.5%',
    trend: 'up',
    icon: Wallet,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Active Users',
    value: '12.5K',
    change: '+5.2%',
    trend: 'up',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Total Revenue',
    value: '$850K',
    change: '+10.8%',
    trend: 'up',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-600'
  },
  {
    title: 'Transaction Rate',
    value: '1.2K/day',
    change: '+2.3%',
    trend: 'up',
    icon: Activity,
    gradient: 'from-purple-500 to-pink-600'
  },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your assets today.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`rounded-xl bg-gradient-to-r ${stat.gradient} p-2 text-white shadow-lg`}>
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.gradient} opacity-20`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Activity Chart */}
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Activity Overview</h2>
            <p className="text-sm text-muted-foreground">Chart will be implemented here</p>
          </div>

          {/* Recent Transactions */}
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <p className="text-sm text-muted-foreground">Transaction list will be implemented here</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}