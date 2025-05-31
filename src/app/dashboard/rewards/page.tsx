'use client';

import { Gift, Star, Award, TrendingUp, ArrowRight } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const rewardStats = [
  {
    title: 'Total Points',
    value: '12,500',
    change: '+2,300 this month',
    icon: Star,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Current Tier',
    value: 'Platinum',
    change: '2 months until Diamond',
    icon: Award,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Rewards Redeemed',
    value: '8',
    change: '+3 this quarter',
    icon: Gift,
    gradient: 'from-orange-500 to-red-600'
  },
];

const availableRewards = [
  {
    id: 1,
    title: 'Premium Property Tour',
    points: 5000,
    description: 'Exclusive access to premium property viewings',
    category: 'Experience',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: 2,
    title: 'Investment Advisory Session',
    points: 7500,
    description: '1-hour personal consultation with our experts',
    category: 'Service',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Luxury Stay Voucher',
    points: 10000,
    description: '2-night stay at premium properties',
    category: 'Travel',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 4,
    title: 'Investment Fee Waiver',
    points: 15000,
    description: 'Waiver on your next investment transaction',
    category: 'Financial',
    gradient: 'from-orange-500 to-red-600'
  },
];

const tierBenefits = [
  {
    tier: 'Silver',
    points: '0 - 5,000',
    benefits: [
      'Basic investment reports',
      'Standard support',
      'Monthly newsletter'
    ],
    gradient: 'from-slate-400 to-slate-500'
  },
  {
    tier: 'Gold',
    points: '5,001 - 15,000',
    benefits: [
      'Premium investment reports',
      'Priority support',
      'Quarterly consultation'
    ],
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    tier: 'Platinum',
    points: '15,001 - 30,000',
    benefits: [
      'VIP investment opportunities',
      '24/7 dedicated support',
      'Monthly consultation'
    ],
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    tier: 'Diamond',
    points: '30,001+',
    benefits: [
      'Exclusive investment access',
      'Personal account manager',
      'Weekly consultation'
    ],
    gradient: 'from-blue-400 to-indigo-500'
  },
];

export default function RewardsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Rewards</h1>
          <p className="text-muted-foreground mt-2">Earn points and unlock exclusive benefits</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {rewardStats.map((stat, index) => (
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

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold">Available Rewards</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {availableRewards.map((reward) => (
                <div
                  key={reward.id}
                  className="rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="space-y-4">
                    <div className={`inline-flex rounded-xl bg-gradient-to-r ${reward.gradient} p-2 text-white shadow-lg`}>
                      <Gift className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{reward.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{reward.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="font-medium">{reward.points} points</span>
                      <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${reward.gradient} text-white font-medium shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]`}
                      >
                        Redeem
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Tier Benefits</h2>
            <div className="space-y-4">
              {tierBenefits.map((tier, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`rounded-xl bg-gradient-to-r ${tier.gradient} p-2 text-white shadow-lg`}>
                          <Award className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold">{tier.tier}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground">{tier.points} points</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-card p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Points History</h2>
            <div className="relative">
              <TrendingUp className="h-24 w-24 text-muted-foreground/20" />
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground">Points history chart will be implemented here</p>
        </div>
      </div>
    </DashboardLayout>
  );
}