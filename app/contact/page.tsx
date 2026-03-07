'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Music, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/nocean99',
    text: 'github.com/nocean99',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/noahcrouse',
    text: 'linkedin.com/in/noahcrouse',
  },
  {
    icon: Music,
    label: 'SoundCloud',
    href: 'https://on.soundcloud.com/bFskgiLZ949vcoxbyh',
    text: 'Nocean on SoundCloud',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:noahsea99@icloud.com',
    text: 'noahsea99@icloud.com',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Work With Me
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            I&apos;m open to roles in creative technology, product design, and
            AI-driven experiences. If you&apos;re building something where
            creativity and code need to work together, I&apos;d love to talk.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open to opportunities
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-24"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
            >
              <link.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-medium">{link.label}</p>
                <p className="text-sm text-muted-foreground">{link.text}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
