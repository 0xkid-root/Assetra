import { Wallet, Users, TrendingUp, BarChart3, Activity, Bell } from 'lucide-react';

const stats = [
  {
    title: 'Total Assets',
    value: '$2,400,000',
    icon: Wallet,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Active Users',
    value: '12,500',
    icon: Users,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Revenue',
    value: '$850,000',
    icon: TrendingUp,
    gradient: 'from-orange-500 to-red-600'
  },
  {
    title: 'Growth Rate',
    value: '+14.5%',
    icon: BarChart3,
    gradient: 'from-purple-500 to-pink-600'
  }
];

const recentActivity = [
  { icon: Activity, text: 'User John Doe invested $10,000', time: '2 min ago' },
  { icon: Bell, text: 'New property added to marketplace', time: '10 min ago' },
  { icon: Wallet, text: 'Withdrawal of $2,500 processed', time: '1 hour ago' }
];

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, <span className="text-purple-500">John!</span></h1>
          <p className="text-muted-foreground">Here's what's happening with your assets today.</p>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User avatar"
          className="w-12 h-12 rounded-full border-2 border-purple-500 shadow"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
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

      {/* Chart & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg col-span-2 flex flex-col justify-center items-center min-h-[220px]">
          <h2 className="text-lg font-semibold mb-2">Portfolio Growth</h2>
          <div className="flex-1 flex items-center justify-center w-full">
            {/* Replace this with a real chart */}
            <BarChart3 className="w-24 h-24 text-purple-400/30" />
          </div>
          <p className="text-sm text-muted-foreground mt-2">Chart coming soon</p>
        </div>
        {/* Recent Activity */}
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4">
            {recentActivity.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-purple-500" />
                <div>
                  <div className="text-sm">{item.text}</div>
                  <div className="text-xs text-muted-foreground">{item.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 