'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { ArrowRight, Sparkles } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const sections = [
  {
    label: '01',
    title: 'Who I Am',
    body: [
      'I\'m a software developer focused on autonomy, intelligent systems, and applied artificial intelligence.',
    ],
  },
  {
    label: '02',
    title: 'Current Work',
    body: [
      'I work on AI-powered applications, workflow automations, computer vision, mission planning, and decision-support systems. I also use AI tools in digital content and operational workflows at O\'Regan\'s Automotive Group.',
    ],
  },
  {
    label: '03',
    title: 'Recent Projects',
    body: [
      'Recent projects include Aegis Mission Intelligence, AI Gym Bro, DietPalAI, AI image detection, Unity prototypes, and interactive audio work.',
    ],
  },
  {
    label: '04',
    title: 'Background',
    body: [
      'I have a BA in Music, a Professional Certificate in Game Audio Design & Production from Berklee Online, and I\'m entering NSCC\'s Graduate Certificate in IT Programming for Artificial Intelligence.',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full pt-32 pb-20">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <span className="chip mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Profile / About
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6">
              Building <span className="gradient-text">useful</span> AI systems
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              AI and autonomy developer with a background in music, game audio, software, and applied AI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square max-w-sm mx-auto terminal-panel p-3">
              <div className="relative h-full w-full overflow-hidden border border-terminal-green/20">
                <Image
                  src="/headshot.png"
                  alt="Noah Crouse"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -right-4 chip chip-magenta">
                <span className="w-1.5 h-1.5 bg-[#CCFF00]" />
                Online
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-neon max-w-6xl mx-auto" />

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
        {sections.map((s, i) => (
          <motion.section key={s.label} {...fadeUp} transition={{ duration: 0.7, delay: i * 0.05, ease }}>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-mono text-sm text-neon-magenta tracking-widest">{s.label}</span>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8">
              <span className="gradient-text">{s.title}</span>
            </h2>
            <div className="space-y-4 text-lg text-foreground/75 leading-relaxed">
              {s.body.map((p, idx) => (
                <p key={idx}>
                  {p.includes('AI Gym Bro') ? (
                    <>
                      AI-powered social apps like{' '}
                      <Link href="/case-studies#ai-gym-bro" className="text-neon-cyan hover:text-neon-magenta underline decoration-dotted underline-offset-4 transition-colors">
                        AI Gym Bro
                      </Link>
                      {' '}and{' '}
                      <Link href="/case-studies#dietpalai" className="text-neon-cyan hover:text-neon-magenta underline decoration-dotted underline-offset-4 transition-colors">
                        DietPalAI
                      </Link>
                      , Unity games with dynamic physics and procedural generation, immersive audio experiences with synthesis and middleware like Wwise. The common thread: personality.
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center terminal-panel p-10 sm:p-14">
          <div className="lg:col-span-5 w-full">
            <p className="terminal-label mb-5">Useful when</p>
            <div className="space-y-3 font-mono text-xs uppercase tracking-widest">
              {['AI system design', 'Computer vision workflows', 'Workflow automation', 'Human-in-the-loop tools'].map((item, index) => (
                <div key={item} className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="text-muted-foreground">0{index + 1}</span>
                  <span className="text-foreground/80 text-right">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Want to work together?
            </h2>
            <p className="text-foreground/75 mb-8 max-w-lg">
              I&apos;m open to AI, autonomy, computer vision, software deployment, and workflow automation projects.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link href="/case-studies" className="btn-neon">
                See my work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/audio" className="btn-ghost">
                Hear my sound
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
