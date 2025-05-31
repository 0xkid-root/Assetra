'use client';

import { Users, MessageSquare, ThumbsUp, Share2, Search, Filter } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const communityStats = [
  {
    title: 'Total Members',
    value: '2.5K',
    change: '+125 this month',
    icon: Users,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Active Discussions',
    value: '186',
    change: '+28 this week',
    icon: MessageSquare,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Total Interactions',
    value: '12.8K',
    change: '+1.2K this month',
    icon: ThumbsUp,
    gradient: 'from-orange-500 to-red-600'
  },
];

const discussions = [
  {
    id: 1,
    title: 'Investment Strategies for 2024',
    author: {
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg'
    },
    category: 'Investment',
    replies: 24,
    likes: 156,
    lastActive: '2 hours ago',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 2,
    title: 'Market Analysis: Commercial Real Estate Trends',
    author: {
      name: 'Michael Chen',
      avatar: '/avatars/michael.jpg'
    },
    category: 'Analysis',
    replies: 18,
    likes: 92,
    lastActive: '4 hours ago',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Property Management Best Practices',
    author: {
      name: 'Emily Davis',
      avatar: '/avatars/emily.jpg'
    },
    category: 'Management',
    replies: 31,
    likes: 203,
    lastActive: '6 hours ago',
    gradient: 'from-green-500 to-emerald-600'
  },
];

const popularTags = [
  { name: 'Investment', count: 256 },
  { name: 'Market Analysis', count: 189 },
  { name: 'Property Management', count: 145 },
  { name: 'Real Estate', count: 298 },
  { name: 'Finance', count: 167 },
];

export default function CommunityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Community</h1>
            <p className="text-muted-foreground mt-2">Connect and engage with fellow investors</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search discussions..."
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.change}</p>
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 space-y-6">
            {discussions.map((discussion) => (
              <div
                key={discussion.id}
                className="rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted" />
                      <div>
                        <p className="font-medium">{discussion.author.name}</p>
                        <p className="text-sm text-muted-foreground">{discussion.lastActive}</p>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold hover:text-primary cursor-pointer">
                      {discussion.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${discussion.gradient} text-white`}
                      >
                        {discussion.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span>{discussion.replies}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{discussion.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
              <div className="space-y-2">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-accent transition-colors"
                  >
                    <span className="font-medium">{tag.name}</span>
                    <span className="text-sm text-muted-foreground">{tag.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Top Contributors</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Users className="h-24 w-24 text-muted-foreground/20" />
                </div>
                <p className="text-center text-sm text-muted-foreground">Contributors list will be implemented here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}