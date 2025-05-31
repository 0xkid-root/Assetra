import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import { motion } from 'framer-motion';

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 64 : 256;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <motion.main
        animate={{ marginLeft: sidebarWidth }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex-1 min-h-screen p-4 sm:p-6 md:p-8 bg-background/30 backdrop-blur-xl transition-all duration-300"
      >
        <Outlet />
      </motion.main>
    </div>
  );
} 