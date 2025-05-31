import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronLeft,
  LayoutDashboard,
  Building2,
  Wallet,
  Users,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  MessageSquare,
  Gift,
  History,
  PieChart,
  Sun,
  Moon,
  Sparkles,
  TrendingUp,
  Activity,
  BarChart3,
  Shield,
  FileText,
} from 'lucide-react';

// Theme hook with prefers-reduced-motion support
const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return { theme, toggleTheme, prefersReducedMotion };
};

interface NavItem {
  title: string;
  icon: React.ElementType;
  href: string;
  badge?: string;
  gradient?: string;
  category?: string;
}

// Gradient configurations
const gradients = {
  overview: 'from-blue-500 to-purple-600',
  marketplace: 'from-purple-500 to-pink-600',
  portfolio: 'from-emerald-500 to-teal-600',
  analytics: 'from-orange-500 to-red-600',
  transactions: 'from-cyan-500 to-blue-600',
  wallet: 'from-indigo-500 to-purple-600',
  documents: 'from-teal-500 to-green-600',
  community: 'from-pink-500 to-rose-600',
  messages: 'from-blue-500 to-indigo-600',
  rewards: 'from-yellow-500 to-orange-600',
  security: 'from-red-500 to-pink-600',
  settings: 'from-slate-500 to-gray-600',
};

const mainNav: NavItem[] = [
  { title: 'Overview', icon: LayoutDashboard, href: '/dashboard', gradient: gradients.overview, category: 'main' },
  { title: 'Marketplace', icon: Building2, href: '/dashboard/marketplace', badge: 'New', gradient: gradients.marketplace, category: 'main' },
  { title: 'Portfolio', icon: PieChart, href: '/dashboard/portfolio', gradient: gradients.portfolio, category: 'main' },
  { title: 'Analytics', icon: BarChart3, href: '/dashboard/analytics', gradient: gradients.analytics, category: 'main' },
  { title: 'Transactions', icon: History, href: '/dashboard/transactions', gradient: gradients.transactions, category: 'finance' },
  { title: 'Wallet', icon: Wallet, href: '/dashboard/wallet', gradient: gradients.wallet, category: 'finance' },
  { title: 'Documents', icon: FileText, href: '/dashboard/documents', gradient: gradients.documents, category: 'tools' },
  { title: 'Community', icon: Users, href: '/dashboard/community', gradient: gradients.community, category: 'social' },
];

const secondaryNav: NavItem[] = [
  { title: 'Messages', icon: MessageSquare, href: '/dashboard/messages', badge: '5', gradient: gradients.messages },
  { title: 'Rewards', icon: Gift, href: '/dashboard/rewards', gradient: gradients.rewards },
  { title: 'Security', icon: Shield, href: '/dashboard/security', gradient: gradients.security },
  { title: 'Settings', icon: Settings, href: '/dashboard/settings', gradient: gradients.settings },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPinned, setIsPinned] = useState(true);
  const [activeItem, setActiveItem] = useState('/dashboard');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme, toggleTheme, prefersReducedMotion } = useTheme();

  const isDark = theme === 'dark';

  const toggleSidebar = () => {
    if (!isPinned) return;
    setIsCollapsed(!isCollapsed);
  };

  const togglePin = () => {
    setIsPinned((prev) => !prev);
    if (!isPinned && isCollapsed) setIsCollapsed(false);
  };

  const NavItem = ({ item }: { item: NavItem }) => {
    const isActive = activeItem === item.href;
    const isHovered = hoveredItem === item.href;

    return (
      <div className="relative group">
        <Link
          to={item.href}
          onClick={() => setActiveItem(item.href)}
          onMouseEnter={() => setHoveredItem(item.href)}
          onMouseLeave={() => setHoveredItem(null)}
          className={`
            flex items-center gap-3 px-3 py-3 rounded-2xl transition-colors duration-300 relative overflow-hidden
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
            ${isActive
              ? `${isDark ? 'bg-white/10 text-white shadow-lg' : 'bg-gray-900/10 text-gray-900 shadow-lg'}`
              : `${isDark ? 'text-gray-300 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-gray-900/5 hover:text-gray-900'}`
            }
            ${isHovered && !isActive ? 'scale-[1.02]' : ''}
          `}
          aria-label={item.title}
          role="button"
          tabIndex={0}
        >
          {isActive && !prefersReducedMotion && (
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-20 rounded-2xl`}
              style={{ animation: prefersReducedMotion ? 'none' : 'pulse 2s ease-in-out infinite' }}
            />
          )}
          {isHovered && !isActive && !prefersReducedMotion && (
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-5 rounded-2xl`} />
          )}
          <div
            className={`
              relative z-10 p-2 rounded-xl transition-colors duration-300 flex-shrink-0
              ${isActive
                ? `bg-gradient-to-r ${item.gradient} text-white shadow-md`
                : `${isDark ? 'bg-white/5' : 'bg-gray-900/5'} group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:text-white`
              }
            `}
          >
            <item.icon className="h-5 w-5" />
          </div>
          {!isCollapsed && (
            <div className="flex items-center justify-between flex-1 relative z-10">
              <span className="text-sm font-medium tracking-wide">{item.title}</span>
              {item.badge && (
                <span
                  className={`
                    px-2.5 py-1 text-xs font-bold rounded-full
                    ${isActive
                      ? `bg-gradient-to-r ${item.gradient} text-white shadow-md`
                      : `${isDark ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'}`
                    }
                  `}
                >
                  {item.badge}
                </span>
              )}
            </div>
          )}
          {isActive && (
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-gradient-to-b ${item.gradient} rounded-r-full`} />
          )}
        </Link>
        {isCollapsed && isHovered && (
          <div
            className={`
              fixed left-20 top-1/2 -translate-y-1/2 z-50 px-3 py-2 rounded-lg shadow-xl border
              ${isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'}
              ${prefersReducedMotion ? '' : 'animate-[fadeIn_0.2s_ease-out_forwards]'}
            `}
            role="tooltip"
            aria-hidden={!isHovered}
          >
            <span className="text-sm font-medium whitespace-nowrap flex items-center gap-2">
              {item.title}
              {item.badge && (
                <span className={`px-2 py-0.5 text-xs font-medium rounded-full bg-gradient-to-r ${item.gradient} text-white`}>
                  {item.badge}
                </span>
              )}
            </span>
            <div
              className={`absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent ${isDark ? 'border-r-gray-800' : 'border-r-white'}`}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <aside
        className={`
          fixed lg:sticky top-0 left-0 z-30 h-screen transition-all duration-300 ease-in-out
          ${isCollapsed ? 'w-16 lg:w-20' : 'w-64 lg:w-80'}
          ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'}
          backdrop-blur-xl border-r shadow-2xl
        `}
        onMouseEnter={() => !isPinned && !isCollapsed && setIsCollapsed(true)}
        onMouseLeave={() => !isPinned && isCollapsed && setIsCollapsed(false)}
      >
        <div
          className={`flex h-16 items-center justify-between px-4 py-4 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
          role="banner"
        >
          <div className="flex items-center gap-3">
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 shadow-md">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"
                    style={{ animation: prefersReducedMotion ? 'none' : 'pulse 2s ease-in-out infinite' }}
                  />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                    Assetra
                  </span>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Sparkles className="h-3 w-3 text-yellow-500" />
                    <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Pro Version
                    </span>
                  </div>
                </div>
              </div>
            )}
            {isCollapsed && (
              <div className="relative">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 shadow-md">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"
                  style={{ animation: prefersReducedMotion ? 'none' : 'pulse 2s ease-in-out infinite' }}
                />
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-xl transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                ${isDark ? 'bg-white/5 hover:bg-white/10 text-yellow-400' : 'bg-gray-900/5 hover:bg-gray-900/10 text-gray-600'}
              `}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={togglePin}
              className={`
                p-2 rounded-xl transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                ${isPinned ? (isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-900/5 hover:bg-gray-900/10 text-gray-600') : 'bg-blue-500/20 text-blue-500'}
              `}
              aria-label={isPinned ? 'Unpin sidebar' : 'Pin sidebar'}
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isPinned ? 'M4 8V4m0 16v-4m16-12h-4m-12 0H4m16 12h-4' : 'M12 4v16m8-8H4'}
                />
              </svg>
            </button>
            <button
              onClick={toggleSidebar}
              className={`
                p-2 rounded-xl transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-900/5 hover:bg-gray-900/10 text-gray-600'}
              `}
              aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        <div className={`px-4 py-6 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 p-0.5">
                <div className="w-full h-full rounded-[10px] bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-700">
                  JD
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border border-white flex items-center justify-center">
                <TrendingUp className="h-1.5 w-1.5 text-white" />
              </div>
            </div>
            {!isCollapsed && (
              <div className="flex flex-col">
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  John Doe
                </span>
                <span className="text-xs bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">
                  Premium Member
                </span>
                <div className="flex items-center gap-1 mt-1">
                  <Activity className="h-3 w-3 text-green-400" />
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Online
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 px-3 py-6 overflow-y-auto">
          <nav className="space-y-6">
            <div className="space-y-1">
              {!isCollapsed && (
                <h3
                  className={`px-3 text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  id="main-nav"
                >
                  Main Menu
                </h3>
              )}
              <div role="navigation" aria-labelledby="main-nav">
                {mainNav.map((item) => (
                  <NavItem key={item.href} item={item} />
                ))}
              </div>
            </div>
            <div className="space-y-1">
              {!isCollapsed && (
                <h3
                  className={`px-3 text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                  id="secondary-nav"
                >
                  Tools & Support
                </h3>
              )}
              <div role="navigation" aria-labelledby="secondary-nav">
                {secondaryNav.map((item) => (
                  <NavItem key={item.href} item={item} />
                ))}
              </div>
            </div>
          </nav>
        </div>
        <div className={`px-4 py-4 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <button
              className={`
                p-2 rounded-xl transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-900/5 hover:bg-gray-900/10 text-gray-600'}
              `}
              aria-label="Help"
            >
              <HelpCircle className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                className={`
                  p-2 rounded-xl transition-colors duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                  ${isDark ? 'bg-white/5 hover:bg-white/10 text-gray-300' : 'bg-gray-900/5 hover:bg-gray-900/10 text-gray-600'}
                `}
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
              </button>
              <div
                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"
                style={{ animation: prefersReducedMotion ? 'none' : 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}
              />
            </div>
            <button
              className={`
                p-2 rounded-xl transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent
                bg-red-500/10 hover:bg-red-500/20 text-red-500 hover:text-red-400
              `}
              aria-label="Log out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.3; }
          }
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}