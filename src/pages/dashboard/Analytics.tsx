import { BarChart3, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

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

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Analytics</h1>
        <p className="text-muted-foreground">Detailed insights and performance metrics</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={metric.title}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-lg bg-gradient-to-br ${metric.gradient} text-white flex flex-col gap-2`}
          >
            <div className="flex items-center gap-3">
              <metric.icon className="w-8 h-8 opacity-80" />
              <span className="text-lg font-semibold">{metric.title}</span>
            </div>
            <div className="text-3xl font-bold mt-2">{metric.value}</div>
            <div className="text-sm opacity-80">{metric.description}</div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20" />
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg flex flex-col justify-center items-center min-h-[260px]">
        <h2 className="text-lg font-semibold mb-2">Revenue Trend</h2>
        <div className="flex-1 flex items-center justify-center w-full">
          {/* Replace this with a real chart */}
          <BarChart3 className="w-32 h-32 text-purple-400/30" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">Chart coming soon</p>
      </div>
    </div>
  );
} 