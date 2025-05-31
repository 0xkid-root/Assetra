import { useEffect } from 'react';
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
      <div className="relative min-h-screen bg-background">
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background/80 via-background to-background/90"></div>
        <div className="fixed inset-0 -z-10 bg-[url('/noise.svg')] opacity-5"></div>
        
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


      </div>
    </ThemeProvider>
  );
}

export default App;