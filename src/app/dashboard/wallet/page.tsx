'use client';

import { CreditCard, ArrowUpRight, ArrowDownRight, Plus } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const walletStats = [
  {
    title: 'Available Balance',
    value: '$45,250.00',
    change: '+12.5%',
    trend: 'up',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Total Invested',
    value: '$850,000.00',
    change: '+24.3%',
    trend: 'up',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Total Returns',
    value: '$125,800.00',
    change: '+18.7%',
    trend: 'up',
    gradient: 'from-orange-500 to-red-600'
  },
];

const paymentMethods = [
  {
    id: 1,
    type: 'Visa',
    number: '•••• 4242',
    expiry: '12/25',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    type: 'Mastercard',
    number: '•••• 5555',
    expiry: '09/24',
    gradient: 'from-orange-500 to-red-600'
  },
];

const recentTransactions = [
  {
    id: 1,
    type: 'Deposit',
    amount: '+$10,000.00',
    date: '2024-01-15',
    status: 'completed',
    direction: 'inflow'
  },
  {
    id: 2,
    type: 'Withdrawal',
    amount: '-$5,000.00',
    date: '2024-01-14',
    status: 'pending',
    direction: 'outflow'
  },
  {
    id: 3,
    type: 'Investment',
    amount: '-$25,000.00',
    date: '2024-01-13',
    status: 'completed',
    direction: 'outflow'
  },
];

export default function WalletPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Wallet</h1>
          <p className="text-muted-foreground mt-2">Manage your funds and payment methods</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {walletStats.map((stat, index) => (
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
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Payment Methods</h2>
              <button
                className="p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                aria-label="Add payment method"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="relative overflow-hidden rounded-xl border p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg bg-gradient-to-r ${method.gradient} p-2 text-white`}>
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{method.type}</p>
                        <p className="text-sm text-muted-foreground">{method.number}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-card p-6 shadow-lg">
            <h2 className="text-lg font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-xl border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-lg p-2 ${transaction.direction === 'inflow' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}
                    >
                      {transaction.direction === 'inflow' ? (
                        <ArrowUpRight className="h-5 w-5" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.type}</p>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-medium ${transaction.direction === 'inflow' ? 'text-green-500' : 'text-red-500'}`}
                    >
                      {transaction.amount}
                    </p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${transaction.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'}`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}