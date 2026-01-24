import { useState, useEffect } from 'react';
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
      <nav
        className={cn(
          'fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block',
          'transition-all duration-500 ease-out',
          isPageReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        )}
        style={{ transitionDelay: isPageReady ? '0ms' : '0ms' }}
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
                  'flex items-center gap-2 px-4 py-2 rounded-full',
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
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={cn(
          'fixed top-4 left-1/2 z-50 md:hidden w-[92%] -translate-x-1/2 transition-all duration-500 ease-out',
          isPageReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        )}
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
            className="group flex flex-col gap-1.5 p-2"
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
        <div
          className={cn(
            'absolute top-16 left-1/2 w-[90%] -translate-x-1/2',
            'rounded-2xl bg-black/60 backdrop-blur-xl',
            'border border-white/10 shadow-xl',
            'transition-all duration-300 ease-out',
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          <div className="p-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = iconMap[item.icon];
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg',
                    'text-base font-medium transition-all duration-200',
                    'hover:bg-primary/10 hover:text-primary',
                    isActive
                      ? 'bg-primary/20 text-primary'
                      : 'text-white/80 hover:text-primary'
                  )}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <div
          className="
      fixed inset-0 z-40 md:hidden
      bg-gradient-to-b from-black/60 via-black/40 to-black/20
      backdrop-blur-md
      transition-opacity duration-300
    "
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
