import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/dashboard/sidebar';
import { cn } from '@/lib/utils';
import AnalyticsPage from "@/app/dashboard/analytics/page";
import MarketplacePage from "@/app/dashboard/marketplace/page";
import PortfolioPage from "@/app/dashboard/portfolio/page";
import TransactionsPage from "@/app/dashboard/transactions/page";
import WalletPage from "@/app/dashboard/wallet/page";
import DocumentsPage from "@/app/dashboard/documents/page";
import CommunityPage from "@/app/dashboard/community/page";
import RewardsPage from "@/app/dashboard/rewards/page";
import SecurityPage from "@/app/dashboard/security/page";
import MessagesPage from "@/app/dashboard/messages/page";
import SettingsPage from "@/app/dashboard/settings/page";
import DashboardPage from "@/app/dashboard/page";




export default function DashboardLayout() {
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  // Sync sidebar width with Sidebar component's state
  const handleSidebarWidth = useCallback((width: number) => {
    setSidebarWidth(width);
  }, []);

  // Handle prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Redirect to dashboard if on root path
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [location.pathname, navigate]);

  // Determine which component to render based on current path
  const renderComponent = () => {
    switch (currentPath) {
      case '/dashboard':
        return <DashboardPage />;
      case '/dashboard/marketplace':
        return <MarketplacePage />;
      case '/dashboard/portfolio':
        return <PortfolioPage />;
      case '/dashboard/transactions':
        return <TransactionsPage />;
      case '/dashboard/analytics':
        return <AnalyticsPage />;
      case '/dashboard/wallet':
        return <WalletPage />;
      case '/dashboard/documents':
        return <DocumentsPage />;
      case '/dashboard/community':
        return <CommunityPage />;
      case '/dashboard/messages':
        return <MessagesPage />;
      case '/dashboard/rewards':
        return <RewardsPage />;
      case '/dashboard/security':
        return <SecurityPage />;
      case '/dashboard/settings':
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90"
      role="application"
      aria-label="Dashboard layout"
    >
      {/* Decorative background */}
      <div
        className="fixed inset-0 -z-10 bg-[url('/noise.svg')] bg-repeat opacity-5"
        aria-hidden="true"
      />
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl md:w-96 md:h-96" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl md:w-96 md:h-96" />
      </div>

      {/* Pass width handler to Sidebar */}
      <Sidebar />

      <motion.main
        initial={false}
        animate={{
          marginLeft: sidebarWidth,
        }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'min-h-screen bg-background/30 backdrop-blur-xl',
          'p-4 sm:p-6 md:p-8 transition-all duration-300'
        )}
        role="main"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </motion.main>
    </div>
  );
}