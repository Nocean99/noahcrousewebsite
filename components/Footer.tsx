'use client';

import { Mail, Github, Linkedin, Music, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nocean99', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/noahcrouse', label: 'LinkedIn' },
    { icon: Music, href: 'https://on.soundcloud.com/bFskgiLZ949vcoxbyh', label: 'SoundCloud' },
    { icon: Mail, href: 'mailto:noahsea99@icloud.com', label: 'Email' },
  ];

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Audio', href: '/audio' },
    { label: 'Creative Tech', href: '/creative-tech' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="absolute inset-x-0 -top-px h-px divider-neon" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <h3 className="font-display text-3xl font-bold gradient-text">Noah Crouse</h3>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Creative technologist. AI apps, interactive sound, and code with personality.
              Currently open to opportunities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-neon-cyan font-display font-semibold hover:gap-3 transition-all"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-foreground/70 hover:text-neon-cyan transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group relative p-3 rounded-xl border border-white/10 bg-white/5 hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all"
                >
                  <link.icon className="w-5 h-5 text-foreground/70 group-hover:text-neon-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} Noah Crouse. Built with curiosity.
          </p>
          <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-lime shadow-[0_0_10px_rgba(180,255,57,0.8)] animate-pulse" />
              System online
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
