import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Properties from '@/components/sections/Properties';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import ScrollToTop from '@/components/ui/scroll-to-top';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import Analytics from './pages/dashboard/Analytics';
import Portfolio from './pages/dashboard/Portfolio';
import Marketplace from './pages/dashboard/Marketplace';
import Transactions from './pages/dashboard/Transactions';

function LandingPage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Properties />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </>
  );
}

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'Assetra | Real Estate, Redefined by Web3';
    
    // Change favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.svg';
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="assetra-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;