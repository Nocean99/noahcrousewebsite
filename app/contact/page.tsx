'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Music, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const socialLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:noahsea99@icloud.com',
    text: 'noahsea99@icloud.com',
    accent: 'cyan' as const,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/noahcrouse',
    text: 'linkedin.com/in/noahcrouse',
    accent: 'magenta' as const,
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/nocean99',
    text: 'github.com/nocean99',
    accent: 'violet' as const,
  },
  {
    icon: Music,
    label: 'SoundCloud',
    href: 'https://on.soundcloud.com/bFskgiLZ949vcoxbyh',
    text: 'Nocean on SoundCloud',
    accent: 'cyan' as const,
  },
];

const accentClasses = {
  cyan: 'group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]',
  magenta: 'group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]',
  violet: 'group-hover:text-[#CCFF00] group-hover:border-[#CCFF00]',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full pt-32 pb-20">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <span className="chip mb-6">
              <span className="w-1.5 h-1.5 bg-[#CCFF00] animate-pulse" />
              Currently open to opportunities
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6">
              Let&apos;s build <br />
              <span className="gradient-text">something useful</span>.
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              Open to roles and collaborations in AI, autonomy, computer vision, workflow automation, and creative technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="terminal-panel h-full p-6 flex flex-col justify-between">
              <div>
                <p className="terminal-label mb-5">Contact</p>
                <div className="space-y-3 font-mono text-xs uppercase tracking-widest">
                  {[
                    ['Email', 'Primary'],
                    ['LinkedIn', 'Roles / Collabs'],
                    ['GitHub', 'Projects'],
                    ['SoundCloud', 'Nocean'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-zinc-900 pb-3">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-terminal-green text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Mail className="w-10 h-10 text-terminal-green" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-neon max-w-6xl mx-auto" />

      {/* Channels */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">Links</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">Get in touch</h2>
        </motion.div>

        <div className="space-y-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className={`group flex items-center gap-5 p-5 sm:p-6 border border-zinc-800 bg-black transition-all ${accentClasses[link.accent]}`}
            >
              <div className="shrink-0 w-12 h-12 border border-zinc-800 bg-black flex items-center justify-center transition-colors">
                <link.icon className="w-5 h-5 transition-colors" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold text-lg">{link.label}</p>
                <p className="text-sm text-muted-foreground font-mono">{link.text}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-current group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            </motion.a>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          className="mt-16 terminal-panel p-8 sm:p-12 text-center"
        >
          <Sparkles className="w-7 h-7 text-neon-magenta mx-auto mb-5" />
          <p className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Replies usually within <span className="gradient-text">24 hours</span>.
          </p>
          <p className="text-foreground/70">
            Best way to reach me is email or LinkedIn.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
