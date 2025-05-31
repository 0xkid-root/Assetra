import { Dispatch, SetStateAction, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart3, PieChart, Building2, History, Wallet, FileText, Users, MessageSquare, Gift, Shield, Settings, Sun, Moon } from 'lucide-react';

const navItems = [
  { title: 'Overview', icon: LayoutDashboard, path: '/dashboard' },
  { title: 'Analytics', icon: BarChart3, path: '/dashboard/analytics' },
  { title: 'Portfolio', icon: PieChart, path: '/dashboard/portfolio' },
  { title: 'Marketplace', icon: Building2, path: '/dashboard/marketplace' },
  { title: 'Transactions', icon: History, path: '/dashboard/transactions' },
  { title: 'Wallet', icon: Wallet, path: '/dashboard/wallet' },
  { title: 'Documents', icon: FileText, path: '/dashboard/documents' },
  { title: 'Community', icon: Users, path: '/dashboard/community' },
  { title: 'Messages', icon: MessageSquare, path: '/dashboard/messages' },
  { title: 'Rewards', icon: Gift, path: '/dashboard/rewards' },
  { title: 'Security', icon: Shield, path: '/dashboard/security' },
  { title: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const [dark, setDark] = useState(true);
  const location = useLocation();

  return (
    <aside className={`h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} fixed z-30`}> 
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">Assetra</span>
        <button onClick={() => setCollapsed(!collapsed)} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <span className="sr-only">Toggle sidebar</span>
          <svg className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
      </div>
      <nav className="flex-1 py-4 px-2 space-y-2">
        {navItems.map(item => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium text-sm ${active ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              aria-current={active ? 'page' : undefined}
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && <span>{item.title}</span>}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <button onClick={() => setDark(d => !d)} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
    </aside>
  );
} 