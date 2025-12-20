'use client';

import { Mail, Github, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/noahcrouse',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/noahcrouse',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:noah@noahcrouse.com',
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Noah Crouse</h3>
            <p className="text-muted-foreground">Building the future, one app at a time.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-card border border-border rounded-full hover:border-accent hover:scale-110 transition-all"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Noah Crouse. Built with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
