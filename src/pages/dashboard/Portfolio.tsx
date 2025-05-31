import { PieChart, TrendingUp, DollarSign } from 'lucide-react';

const stats = [
  { title: 'Total Value', value: '$1,200,000', icon: DollarSign, gradient: 'from-blue-500 to-purple-600' },
  { title: 'Properties', value: '8', icon: PieChart, gradient: 'from-emerald-500 to-teal-600' },
  { title: 'Growth', value: '+8.2%', icon: TrendingUp, gradient: 'from-orange-500 to-red-600' },
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-1">Portfolio</h1>
        <p className="text-muted-foreground">Your current asset allocation and performance</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className={`relative overflow-hidden rounded-2xl p-6 shadow-lg bg-gradient-to-br ${stat.gradient} text-white flex flex-col gap-2`}
          >
            <div className="flex items-center gap-3">
              <stat.icon className="w-8 h-8 opacity-80" />
              <span className="text-lg font-semibold">{stat.title}</span>
            </div>
            <div className="text-3xl font-bold mt-2">{stat.value}</div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-white/20" />
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg flex flex-col justify-center items-center min-h-[220px]">
        <h2 className="text-lg font-semibold mb-2">Asset Allocation</h2>
        <PieChart className="w-24 h-24 text-purple-400/30" />
        <p className="text-sm text-muted-foreground mt-2">Chart coming soon</p>
      </div>
    </div>
  );
} 