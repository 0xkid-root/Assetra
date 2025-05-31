'use client';

import { History, ArrowUpRight, ArrowDownRight, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const transactions = [
  {
    id: 'TRX001',
    type: 'Investment',
    property: 'Office Complex A',
    amount: '+$50,000',
    status: 'completed',
    date: '2024-01-15',
    direction: 'inflow',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 'TRX002',
    type: 'Withdrawal',
    property: 'Retail Space B',
    amount: '-$15,000',
    status: 'completed',
    date: '2024-01-14',
    direction: 'outflow',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    id: 'TRX003',
    type: 'Dividend',
    property: 'Industrial Park C',
    amount: '+$8,500',
    status: 'pending',
    date: '2024-01-13',
    direction: 'inflow',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'TRX004',
    type: 'Maintenance Fee',
    property: 'Residential D',
    amount: '-$2,500',
    status: 'completed',
    date: '2024-01-12',
    direction: 'outflow',
    gradient: 'from-orange-500 to-red-600'
  },
];

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Transactions</h1>
            <p className="text-muted-foreground mt-2">View and manage your transaction history</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="pl-10 pr-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              className="p-2 rounded-xl border bg-background hover:bg-accent transition-colors"
              aria-label="Filter"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Inflow</p>
                <p className="text-2xl font-bold text-green-500">+$58,500</p>
              </div>
              <div className="rounded-xl bg-green-500/10 p-2 text-green-500">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Outflow</p>
                <p className="text-2xl font-bold text-red-500">-$17,500</p>
              </div>
              <div className="rounded-xl bg-red-500/10 p-2 text-red-500">
                <ArrowDownRight className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Net Flow</p>
                <p className="text-2xl font-bold">+$41,000</p>
              </div>
              <div className="rounded-xl bg-blue-500/10 p-2 text-blue-500">
                <History className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-orange-500">$8,500</p>
              </div>
              <div className="rounded-xl bg-orange-500/10 p-2 text-orange-500">
                <History className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-y bg-muted/50">
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Transaction ID</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Type</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Property</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="group hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{transaction.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${transaction.gradient}`} />
                        <span>{transaction.type}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{transaction.property}</td>
                    <td className="px-6 py-4">
                      <span
                        className={transaction.direction === 'inflow' ? 'text-green-500' : 'text-red-500'}
                      >
                        {transaction.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'}`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{transaction.date}</td>
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