import { ReactNode } from 'react';
import Sidebar from './sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8 lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}