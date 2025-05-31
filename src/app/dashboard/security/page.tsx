'use client';

import { Shield, Key, Smartphone, Bell,  Lock, History } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const securityStats = [
  {
    title: 'Security Score',
    value: '85/100',
    status: 'Good',
    icon: Shield,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    title: 'Last Login',
    value: '2 hours ago',
    status: 'Normal activity',
    icon: History,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    title: '2FA Status',
    value: 'Enabled',
    status: 'SMS + Authenticator',
    icon: Smartphone,
    gradient: 'from-orange-500 to-red-600'
  },
];

const securitySettings = [
  {
    id: 'password',
    title: 'Password',
    description: 'Change your account password',
    icon: Key,
    lastUpdated: '3 months ago',
    status: 'Strong',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    id: '2fa',
    title: 'Two-Factor Authentication',
    description: 'Add an extra layer of security',
    icon: Smartphone,
    lastUpdated: '1 month ago',
    status: 'Enabled',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'notifications',
    title: 'Security Alerts',
    description: 'Manage security notification preferences',
    icon: Bell,
    lastUpdated: '1 week ago',
    status: 'Configured',
    gradient: 'from-emerald-500 to-teal-600'
  },
];

const recentActivity = [
  {
    id: 1,
    action: 'Login attempt',
    status: 'success',
    device: 'Chrome on Windows',
    location: 'New York, US',
    time: '2 hours ago',
    ip: '192.168.1.1'
  },
  {
    id: 2,
    action: 'Password changed',
    status: 'success',
    device: 'Chrome on Windows',
    location: 'New York, US',
    time: '3 days ago',
    ip: '192.168.1.1'
  },
  {
    id: 3,
    action: 'Login attempt',
    status: 'failed',
    device: 'Safari on iPhone',
    location: 'London, UK',
    time: '1 week ago',
    ip: '192.168.1.2'
  },
];

export default function SecurityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Security</h1>
          <p className="text-muted-foreground mt-2">Manage your account security and privacy settings</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {securityStats.map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.status}</p>
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
            <h2 className="text-lg font-semibold">Security Settings</h2>
            <div className="space-y-4">
              {securitySettings.map((setting) => (
                <div
                  key={setting.id}
                  className="rounded-2xl bg-card p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl bg-gradient-to-r ${setting.gradient} p-2 text-white shadow-lg`}>
                      <setting.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{setting.title}</h3>
                        <span className="text-sm text-muted-foreground">Last updated {setting.lastUpdated}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t">
                        <span className="text-sm font-medium">{setting.status}</span>
                        <button
                          className={`px-4 py-2 rounded-xl bg-gradient-to-r ${setting.gradient} text-white font-medium shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]`}
                        >
                          Configure
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Connected Devices</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <Lock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Current Device</p>
                        <p className="text-sm text-muted-foreground">Chrome on Windows</p>
                      </div>
                    </div>
                    <button className="text-sm text-primary hover:underline">Revoke</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4 rounded-xl border">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{activity.action}</span>
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${activity.status === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}
                          >
                            {activity.status}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{activity.device}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{activity.location}</span>
                          <span>•</span>
                          <span>{activity.ip}</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}