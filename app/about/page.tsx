'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import OrbitalScene from '@/components/three/OrbitalSceneClient';
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
      'I\'m a multidisciplinary developer and audio designer with a passion for creating immersive digital experiences. I like making technology feel a little more human. Responsive, expressive, and just unpredictable enough to stay interesting.',
      'With over a decade of music production experience, I evolved from crafting sonic landscapes to building interactive applications that combine technology, design, and user experience. Both worlds are about shaping raw material into something people feel.',
    ],
  },
  {
    label: '02',
    title: 'What I Build',
    body: [
      'AI-powered social apps, Unity games with dynamic physics and procedural generation, immersive audio experiences with synthesis and middleware like Wwise. The common thread: personality.',
      'I don\'t build tools that feel like tools. I build things that feel like they were made by a human who cares.',
    ],
  },
  {
    label: '03',
    title: 'How I Work',
    body: [
      'Ship fast, get feedback, iterate. I believe in building products that solve real problems, using modern technologies like AI to create intuitive, conversational interfaces. Whether I\'m coding a Flutter app, designing game audio, or crafting soundscapes. prototype quickly, test with real people, refine until it clicks.',
    ],
  },
  {
    label: '04',
    title: 'What Drives Me',
    body: [
      'The moment when a tool stops feeling like software and starts feeling like a collaborator. When an AI coach actually motivates you. When a game sound makes you flinch. When an interface anticipates what you need.',
      'That space between "functional" and "delightful" is where I live.',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full pt-32 pb-20">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="blob" style={{ background: '#00e7ff', width: 380, height: 380, top: '-10%', left: '-10%' }} />
        <div className="blob" style={{ background: '#ff3df0', width: 340, height: 340, top: '40%', right: '-8%', animationDelay: '3s' }} />

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
              Building <span className="gradient-text">human</span> tech
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              Developer, audio designer, lifelong synth-head. I make digital things that feel
              alive instead of installed.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/30 via-neon-violet/20 to-neon-magenta/30 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_-15px_rgba(0,231,255,0.5)]">
                <Image
                  src="/headshot.png"
                  alt="Noah Crouse"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 -right-4 chip chip-magenta">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-lime shadow-[0_0_10px_rgba(180,255,57,0.8)]" />
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
              <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/40 via-white/10 to-transparent" />
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

      {/* 3D + CTA */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center glass-strong rounded-3xl p-10 sm:p-14">
          <div className="lg:col-span-5 aspect-square max-w-xs mx-auto w-full">
            <OrbitalScene shape="octa" primary="#ff3df0" secondary="#00e7ff" />
          </div>
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Curious about a collab?
            </h2>
            <p className="text-foreground/75 mb-8 max-w-lg">
              I&apos;m most useful when the brief is fuzzy and the goal is to make something feel
              alive. Bring me in early.
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
