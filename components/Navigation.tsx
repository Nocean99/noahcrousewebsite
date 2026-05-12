'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/audio', label: 'Audio' },
  { href: '/creative-tech', label: 'Creative Tech' },
  { href: '/contact', label: 'Work With Me' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? 'glass border-white/10 shadow-[0_8px_40px_-12px_rgba(0,231,255,0.18)]'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-14">
          <Link
            href="/"
            className="group relative flex items-center gap-2 font-bold tracking-tight"
          >
            <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta text-[#04050a] text-sm font-black shadow-[0_0_20px_rgba(0,231,255,0.5)] group-hover:shadow-[0_0_28px_rgba(255,61,240,0.6)] transition-all">
              NC
            </span>
            <span className="hidden sm:inline text-foreground/90 font-display text-sm tracking-widest uppercase">
              Noah <span className="text-neon-cyan">/</span> Crouse
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 border border-neon-cyan/40 shadow-[0_0_20px_rgba(0,231,255,0.3)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${active ? 'text-white' : ''}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        active
                          ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-magenta/20 border border-neon-cyan/40 text-white'
                          : 'text-foreground/70 hover:text-foreground hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
