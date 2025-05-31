import { History, ArrowUpRight, ArrowDownRight, CheckCircle, Clock } from 'lucide-react';

const summary = [
  { label: 'Total Transactions', value: '1,245', icon: History, gradient: 'from-blue-500 to-purple-600' },
  { label: 'Total Inflow', value: '+$320,000', icon: ArrowUpRight, gradient: 'from-emerald-500 to-teal-600' },
  { label: 'Total Outflow', value: '-$120,000', icon: ArrowDownRight, gradient: 'from-orange-500 to-red-600' },
];

const transactions = [
  { id: 'TRX001', type: 'Investment', property: 'Office Complex A', amount: '+$50,000', status: 'completed', date: '2024-01-15', direction: 'inflow' },
  { id: 'TRX002', type: 'Withdrawal', property: 'Retail Space B', amount: '-$15,000', status: 'completed', date: '2024-01-14', direction: 'outflow' },
  { id: 'TRX003', type: 'Dividend', property: 'Industrial Park C', amount: '+$8,500', status: 'pending', date: '2024-01-13', direction: 'inflow' },
  { id: 'TRX004', type: 'Maintenance Fee', property: 'Residential D', amount: '-$2,500', status: 'completed', date: '2024-01-12', direction: 'outflow' },
];

export default function Transactions() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Transactions</h1>
        <p className="text-muted-foreground">Your recent financial activity and transaction history</p>
      </div>
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summary.map((item) => (
          <div
            key={item.label}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-lg bg-gradient-to-br ${item.gradient} text-white flex flex-col gap-2`}
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-8 h-8 opacity-80" />
              <span className="text-lg font-semibold">{item.label}</span>
            </div>
            <div className="text-3xl font-bold mt-2">{item.value}</div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20" />
          </div>
        ))}
      </div>
      {/* Transactions Table */}
      <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-muted-foreground border-b border-gray-200 dark:border-gray-700">
              <th className="py-2 pr-4">ID</th>
              <th className="py-2 pr-4">Type</th>
              <th className="py-2 pr-4">Property</th>
              <th className="py-2 pr-4">Amount</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2 pr-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition">
                <td className="py-2 pr-4 font-mono">{trx.id}</td>
                <td className="py-2 pr-4">{trx.type}</td>
                <td className="py-2 pr-4">{trx.property}</td>
                <td className={`py-2 pr-4 font-semibold ${trx.direction === 'inflow' ? 'text-green-500' : 'text-red-500'}`}>{trx.amount}</td>
                <td className="py-2 pr-4 flex items-center gap-2">
                  {trx.status === 'completed' ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-yellow-500" />
                  )}
                  <span>{trx.status.charAt(0).toUpperCase() + trx.status.slice(1)}</span>
                </td>
                <td className="py-2 pr-4">{trx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 