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
    { label: 'Work', href: '/case-studies' },
    { label: 'Audio', href: '/audio' },
    { label: 'Tech Stack', href: '/creative-tech' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative mt-24 border-t border-zinc-800">
      <div className="absolute inset-x-0 -top-px h-px divider-neon" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <h3 className="headline-md text-[#CCFF00] uppercase">Noah Crouse</h3>
            <p className="text-zinc-500 max-w-sm leading-relaxed text-sm">
              AI and autonomy developer focused on mission intelligence, computer vision, workflow automation, and applied AI systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 technical-sm text-[#CCFF00]"
            >
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="technical-sm text-zinc-500 mb-4">
              NAVIGATE
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="technical-sm text-zinc-500 hover:text-[#CCFF00] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="technical-sm text-zinc-500 mb-4">
              CONNECT
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group relative p-3 border border-zinc-800 bg-black hover:border-[#CCFF00] transition-all"
                >
                  <link.icon className="w-5 h-5 text-zinc-500 group-hover:text-[#CCFF00] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600 font-mono uppercase">
            © {currentYear} Noah Crouse. Built with curiosity.
          </p>
          <p className="technical-sm text-zinc-600">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#CCFF00] animate-pulse" />
              Available
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
