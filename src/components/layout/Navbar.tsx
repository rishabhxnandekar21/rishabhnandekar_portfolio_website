import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Home,
  Code,
  FolderOpen,
  Briefcase,
  Trophy,
  BookOpen,
  Mail,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { navItems } from '@/data/portfolio-data';
import { usePageReady } from '@/contexts/PageLoadContext';

// Icon mapping for navigation items
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Code,
  FolderOpen,
  Briefcase,
  Trophy,
  BookOpen,
  Mail,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isPageReady } = usePageReady();

  const sectionIds = navItems.map((item) => item.id);
  const { activeSection, scrollToSection } = useScrollSpy({
    sectionIds,
    offset: 150,
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar - Floating Center */}
      <motion.nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div
          className={cn(
            'flex items-center gap-1 px-2 py-2 rounded-full',
            'glass border border-border/50',
            isScrolled && 'shadow-lg shadow-primary/5'
          )}
        >
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-full interactive',
                  'text-sm font-medium transition-all duration-200',
                  'hover:bg-primary/10 hover:text-primary',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground'
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span className="hidden lg:inline">{item.label}</span>
              </button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        className="fixed top-4 left-1/2 z-50 md:hidden w-[92%] -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={isPageReady ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div
          className={cn(
            'flex items-center justify-between px-5 py-3',
            'rounded-full bg-black/40 backdrop-blur-xl',
            'border border-white/10 shadow-lg',
            'transition-all duration-300'
          )}
        >
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white">
              Rishabh Nandekar
            </span>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="group flex flex-col gap-1.5 p-2 interactive"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-all',
                isMobileMenuOpen && 'rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-4 bg-white transition-all',
                isMobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 bg-white transition-all',
                isMobileMenuOpen && '-rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-16 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="p-4 flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-lg interactive',
                        'text-base font-medium transition-all duration-200',
                        'hover:bg-primary/10 hover:text-primary',
                        isActive
                          ? 'bg-primary/20 text-primary'
                          : 'text-white/80 hover:text-primary'
                      )}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                      <span>{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile menu backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-gradient-to-b from-black/60 via-black/40 to-black/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
