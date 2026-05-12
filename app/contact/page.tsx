'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Music, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import Footer from '@/components/Footer';
import OrbitalScene from '@/components/three/OrbitalSceneClient';

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
  cyan: 'group-hover:text-neon-cyan group-hover:border-neon-cyan/60 group-hover:shadow-[0_0_30px_-8px_rgba(0,231,255,0.6)]',
  magenta: 'group-hover:text-neon-magenta group-hover:border-neon-magenta/60 group-hover:shadow-[0_0_30px_-8px_rgba(255,61,240,0.6)]',
  violet: 'group-hover:text-neon-violet group-hover:border-neon-violet/60 group-hover:shadow-[0_0_30px_-8px_rgba(138,92,255,0.6)]',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full pt-32 pb-20">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="blob" style={{ background: '#00e7ff', width: 420, height: 420, top: '-15%', left: '-12%' }} />
        <div className="blob" style={{ background: '#ff3df0', width: 380, height: 380, top: '20%', right: '-10%', animationDelay: '3s' }} />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <span className="chip mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-lime shadow-[0_0_10px_rgba(180,255,57,0.8)] animate-pulse" />
              Currently open to opportunities
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6">
              Let&apos;s build <br />
              <span className="gradient-text">something weird</span> together.
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              I&apos;m open to roles in creative technology, product design, and AI-driven
              experiences. If you&apos;re building something where creativity and code need
              to work together, I&apos;d love to talk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/30 via-neon-violet/20 to-neon-magenta/30 blur-3xl" />
            <OrbitalScene shape="octa" primary="#00e7ff" secondary="#ff3df0" />
          </motion.div>
        </div>
      </section>

      <div className="divider-neon max-w-6xl mx-auto" />

      {/* Channels */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">Channels open</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">Pick a frequency</h2>
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
              className={`group flex items-center gap-5 p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all ${accentClasses[link.accent]}`}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center transition-colors">
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
          className="mt-16 glass-strong rounded-3xl p-8 sm:p-12 text-center"
        >
          <Sparkles className="w-7 h-7 text-neon-magenta mx-auto mb-5" />
          <p className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Replies usually within <span className="gradient-text">24 hours</span>.
          </p>
          <p className="text-foreground/70">
            Even if it&apos;s just to say hi, share something you&apos;re working on, or argue
            about synthesizers.
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
