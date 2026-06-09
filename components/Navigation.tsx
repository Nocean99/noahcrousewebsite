'use client';

import { useState, useEffect } from 'react';
import { BriefcaseBusiness, Code2, Contact, FileText, Home, Menu, Music, User, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home', shortLabel: 'Home', icon: Home },
  { href: '/about', label: 'About', shortLabel: 'About', icon: User },
  { href: '/case-studies', label: 'Work', shortLabel: 'Work', icon: FileText },
  { href: '/audio', label: 'Audio', shortLabel: 'Audio', icon: Music },
  { href: '/creative-tech', label: 'Tech Stack', shortLabel: 'Stack', icon: Code2 },
  { href: '/contact', label: 'Contact', shortLabel: 'Contact', icon: Contact },
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

  const primaryLinks = navLinks.slice(0, 4);
  const secondaryLinks = navLinks.slice(4);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto h-14 border-b border-[#CCFF00] bg-black transition-all duration-75 ${
          isScrolled ? '' : ''
        }`}
      >
        <div className="flex items-center justify-between px-4 h-14">
          <Link
            href="/"
            className="group relative flex items-center gap-3 font-bold"
          >
            <span className="text-[#CCFF00] font-black tracking-widest text-xl font-display">
              NOAH
            </span>
            <span className="hidden sm:inline text-zinc-600 technical-sm text-[10px]">
              Personal portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-0 font-mono text-xs uppercase">
            {primaryLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`h-14 flex items-center px-4 transition-colors duration-75 ${
                    active
                      ? 'bg-[#CCFF00] text-black font-bold'
                      : 'text-zinc-400 hover:text-[#CCFF00]'
                  }`}
                >
                  {link.shortLabel}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
              {secondaryLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`h-8 flex items-center px-3 border font-mono text-xs uppercase transition-colors duration-75 ${
                      active
                        ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold'
                        : 'border-zinc-700 text-zinc-400 hover:border-[#CCFF00] hover:text-[#CCFF00]'
                    }`}
                  >
                    {link.shortLabel}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/contact"
              className="hidden md:block border border-[#CCFF00] text-[#CCFF00] font-mono text-xs uppercase px-3 py-1 hover:bg-[#CCFF00] hover:text-black transition-colors"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-zinc-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-[#CCFF00] bg-black"
            >
              <div>
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-xs font-mono uppercase tracking-widest border-b border-zinc-900 transition-all ${
                        active
                          ? 'bg-[#CCFF00] text-black font-bold'
                          : 'text-zinc-400 hover:text-[#CCFF00] hover:bg-zinc-900'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
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
    <aside className="hidden md:flex fixed left-0 top-14 h-[calc(100vh-3.5rem)] flex-col w-64 bg-black border-r border-zinc-800 z-40 font-mono text-xs uppercase overflow-y-auto">
      <div className="px-6 py-4 border-b border-zinc-900">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-[#CCFF00] animate-pulse" />
          <span className="text-[#CCFF00] font-black tracking-widest">Noah Crouse</span>
        </div>
        <span className="text-zinc-600 text-[10px]">Available for work</span>
      </div>

      <nav className="flex-1 pt-2">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 px-6 py-3 transition-none ${
                active
                  ? 'bg-[#CCFF00] text-black font-bold'
                  : 'text-zinc-400 hover:text-[#CCFF00] hover:bg-zinc-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 pt-4 pb-6 border-t border-zinc-900 mt-auto">
        <Link
          href="/contact"
          className="flex items-center gap-4 py-2 text-zinc-500 hover:text-[#CCFF00] transition-colors"
        >
          <BriefcaseBusiness className="w-4 h-4" />
          Work with me
        </Link>
      </div>
    </aside>
    </>
  );
}
