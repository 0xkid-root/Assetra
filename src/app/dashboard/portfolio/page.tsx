'use client';

import { PieChart, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const portfolioStats = [
  {
    title: 'Total Portfolio Value',
    value: '$1.2M',
    change: '+8.2%',
    trend: 'up',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Monthly Income',
    value: '$12.5K',
    change: '+5.8%',
    trend: 'up',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Annual Yield',
    value: '7.8%',
    change: '-0.5%',
    trend: 'down',
    gradient: 'from-orange-500 to-red-600'
  },
];

const assets = [
  {
    name: 'Office Complex A',
    allocation: '35%',
    value: '$420K',
    return: '+12.5%',
    trend: 'up',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Retail Space B',
    allocation: '25%',
    value: '$300K',
    return: '+8.3%',
    trend: 'up',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Residential Building C',
    allocation: '20%',
    value: '$240K',
    return: '-2.1%',
    trend: 'down',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Industrial Warehouse D',
    allocation: '20%',
    value: '$240K',
    return: '+5.7%',
    trend: 'up',
    gradient: 'from-orange-500 to-red-600'
  },
];

export default function PortfolioPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-muted-foreground mt-2">Track and manage your real estate investments</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {portfolioStats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <span
                    className={`flex items-center text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
                  >
                    {stat.change}
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="ml-1 h-4 w-4" />
                    )}
                  </span>
                </div>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.gradient} opacity-20`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Portfolio Allocation</h2>
            <div className="mt-4 aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <PieChart className="h-48 w-48 text-muted-foreground/20" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Chart will be implemented here</p>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold">Performance History</h2>
            <div className="mt-4 aspect-square relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp className="h-48 w-48 text-muted-foreground/20" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">Chart will be implemented here</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Asset Breakdown</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Asset Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Allocation</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Value</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Return</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {assets.map((asset, index) => (
                  <tr key={index} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${asset.gradient}`} />
                        <span className="font-medium">{asset.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{asset.allocation}</td>
                    <td className="px-6 py-4 font-medium">{asset.value}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`flex items-center ${asset.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
                      >
                        {asset.return}
                        {asset.trend === 'up' ? (
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        ) : (
                          <ArrowDownRight className="ml-1 h-4 w-4" />
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
    </DashboardLayout>
  );
}