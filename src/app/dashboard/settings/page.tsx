'use client';

import { Settings, User, Bell, Globe, Moon, Save } from 'lucide-react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const settingsCategories = [
  {
    id: 'account',
    title: 'Account Settings',
    icon: User,
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: Bell,
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'preferences',
    title: 'Preferences',
    icon: Settings,
    gradient: 'from-orange-500 to-red-600'
  },
];

const notificationSettings = [
  {
    id: 'investment_updates',
    title: 'Investment Updates',
    description: 'Receive notifications about your investment performance',
    enabled: true
  },
  {
    id: 'market_alerts',
    title: 'Market Alerts',
    description: 'Get notified about market changes and opportunities',
    enabled: true
  },
  {
    id: 'account_activity',
    title: 'Account Activity',
    description: 'Security and account-related notifications',
    enabled: true
  },
  {
    id: 'newsletter',
    title: 'Newsletter',
    description: 'Weekly digest of market insights and analysis',
    enabled: false
  },
];

const preferences = [
  {
    id: 'language',
    title: 'Language',
    description: 'Choose your preferred language',
    value: 'English',
    icon: Globe
  },
  {
    id: 'theme',
    title: 'Theme',
    description: 'Choose between light and dark mode',
    value: 'System Default',
    icon: Moon
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {settingsCategories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-shadow hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className={`rounded-xl bg-gradient-to-r ${category.gradient} p-2 text-white shadow-lg`}>
                  <category.icon className="h-5 w-5" />
                </div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>
              <div
                className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${category.gradient} opacity-20`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-6">Account Information</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  className="w-full mt-4 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-6">Preferences</h2>
              <div className="space-y-4">
                {preferences.map((pref) => (
                  <div key={pref.id} className="flex items-center justify-between p-4 rounded-xl border">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-primary/10 p-2">
                        <pref.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{pref.title}</p>
                        <p className="text-sm text-muted-foreground">{pref.description}</p>
                      </div>
                    </div>
                    <select className="px-3 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>{pref.value}</option>
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-6">Notification Settings</h2>
              <div className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-start gap-4 p-4 rounded-xl border">
                    <div className="flex-1">
                      <p className="font-medium">{setting.title}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={setting.enabled}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-6">Connected Accounts</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl border">
                  <p className="text-center text-sm text-muted-foreground">Connected accounts section will be implemented here</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-destructive/5 p-6 shadow-lg">
              <h2 className="text-lg font-semibold text-destructive mb-2">Danger Zone</h2>
              <p className="text-sm text-muted-foreground mb-4">Permanently delete your account and all of your content.</p>
              <button className="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}