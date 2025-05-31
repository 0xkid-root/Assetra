import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';
import { Moon, Sun, Menu, X, Building2, CircleDollarSign, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#properties', label: 'Properties' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#testimonials', label: 'Testimonials' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Calculate which section is currently in view
      const sections = links.map(link => ({
        id: link.href.substring(1),
        element: document.getElementById(link.href.substring(1)),
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      setActiveSection(currentSection ? currentSection.id : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-xl bg-background/80 shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Assetra</span>
          </div>
        </motion.div>

        {/* Desktop navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={cn(
                "text-sm font-medium transition-colors relative",
                activeSection === link.href.substring(1)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-600"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          
          {/* <Button variant="default" className="hidden md:flex items-center gap-2 rounded-full">
            <CircleDollarSign className="h-4 w-4" />
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4" />
          </Button> */}
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </motion.div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="absolute top-full left-0 right-0 bg-card/95 backdrop-blur-lg shadow-lg p-4 border-t border-border md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <motion.button
                  key={link.href}
                  variants={itemVariants}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "text-sm font-medium py-2 px-4 rounded-md transition-colors",
                    activeSection === link.href.substring(1)
                      ? "bg-accent text-foreground"
                      : "hover:bg-accent text-muted-foreground"
                  )}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div variants={itemVariants}>
                <Button
                  variant="default"
                  className="w-full mt-2 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <CircleDollarSign className="h-4 w-4" />
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}