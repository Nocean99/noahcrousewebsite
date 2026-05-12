'use client';

import { motion } from 'framer-motion';
import { Volume2, Gamepad2, ArrowRight, Sparkles, Waves } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import OrbitalScene from '@/components/three/OrbitalSceneClient';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const redesigns = [
  {
    title: 'Black Myth: Wukong',
    type: 'Sound Redesign',
    description: 'Complete audio redesign of gameplay footage from Black Myth: Wukong, created as part of my Professional Certificate in Game Audio at Berklee.',
    tools: ['Pro Tools', 'Sound Design', 'Foley', 'Audio Post-Production'],
    youtubeId: '7MCjouhzlTE',
  },
  {
    title: 'The Last of Us',
    type: 'Sound Redesign',
    description: 'Full sound redesign of gameplay footage from The Last of Us, showcasing environmental audio, combat sounds, and atmospheric design.',
    tools: ['Pro Tools', 'Sound Design', 'Ambience', 'Audio Post-Production'],
    youtubeId: '6QC6Zvc6zUQ',
  },
  {
    title: 'AZUREUS: The Animated Series',
    type: 'Sound Redesign',
    description: 'Audio redesign for a scene from "AZUREUS: The Animated Series" by Black Sun Entertainment, featuring creature sounds, environmental audio, and cinematic sound design.',
    tools: ['Pro Tools', 'Sound Design', 'Creature Vocals', 'Cinematic Audio'],
    youtubeId: 'zIM8-oGjrJs',
  },
];

const implementations = [
  {
    title: 'Stealth Unity Game',
    type: 'Wwise Implementation',
    description: 'Complete audio implementation for a stealth-based Unity game using Wwise. Features dynamic music systems, enemy awareness states, and environmental audio triggers.',
    tools: ['Wwise', 'Unity', 'C#', 'Adaptive Audio'],
    youtubeId: 'gKL2tK7DXmU',
  },
  {
    title: 'Marble Game',
    type: 'FMOD Implementation',
    description: 'Original marble game audio implementation using FMOD. Includes physics-based audio reactions, surface material variations, and dynamic sound effects.',
    tools: ['FMOD', 'Unity', 'C#', 'Physics Audio'],
    youtubeId: 'LHttSkSFz_E',
  },
];

interface Project { title: string; type: string; description: string; tools: string[]; youtubeId: string; }

function VideoCard({ project, accent }: { project: Project; accent: 'cyan' | 'magenta' }) {
  return (
    <div className="neon-card group overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className={`chip ${accent === 'magenta' ? 'chip-magenta' : ''} mb-3`}>
            {project.type}
          </span>
          <h4 className="font-display text-xl font-bold">{project.title}</h4>
        </div>
        <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded-full border border-white/10 bg-white/[0.03] text-foreground/60"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AudioPage() {
  return (
    <main className="min-h-screen w-full pt-32 pb-20">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="blob" style={{ background: '#ff3df0', width: 380, height: 380, top: '-10%', right: '-8%' }} />
        <div className="blob" style={{ background: '#8a5cff', width: 340, height: 340, top: '20%', left: '-8%', animationDelay: '3s' }} />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <span className="chip chip-magenta mb-6">
              <Waves className="w-3.5 h-3.5" />
              Audio / Interactive Sound
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6">
              Sound that <span className="gradient-text">reacts</span>.
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              I design and implement interactive audio systems using synthesis, sampling,
              and middleware like Wwise and FMOD.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-magenta/30 to-neon-violet/30 blur-3xl" />
            <OrbitalScene shape="torus" primary="#ff3df0" secondary="#8a5cff" />
          </motion.div>
        </div>
      </section>

      <div className="divider-neon max-w-6xl mx-auto" />

      {/* The Story */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }}>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-cyan tracking-widest">01</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/40 via-white/10 to-transparent" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 gradient-text">The Story</h2>
          <div className="space-y-5 text-lg text-foreground/75 leading-relaxed">
            <p>
              For more than a decade, I produced electronic music under the name Nocean, shaping
              synths, layering textures, and building tracks that lived somewhere between ambient
              and experimental. Music taught me how sound shapes emotion. how a filter sweep can
              build tension, how silence can hit harder than a drop.
            </p>
            <p>
              Eventually I wanted to build more than beats. I wanted the sounds to respond, to
              react, to be part of something interactive. That&apos;s what pulled me into game
              audio and sound design.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Sound Redesigns */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-cyan tracking-widest">02</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/40 via-white/10 to-transparent" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Volume2 className="w-8 h-8 text-neon-cyan" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Sound Redesigns</h2>
          </div>
          <p className="text-foreground/70 max-w-3xl">
            Complete audio redesigns of existing game and animation footage. stripping the original
            audio and rebuilding every layer from scratch.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {redesigns.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <VideoCard project={p} accent="cyan" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Audio Implementations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-magenta tracking-widest">03</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-magenta/40 via-white/10 to-transparent" />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-neon-magenta" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Audio Implementations</h2>
          </div>
          <p className="text-foreground/70 max-w-3xl">
            Game audio built from the ground up. Middleware integration, adaptive music systems,
            and physics-driven sound.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {implementations.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <VideoCard project={p} accent="magenta" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Toolkit */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }}>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-cyan tracking-widest">04</span>
            <div className="flex-1 h-px bg-gradient-to-r from-neon-cyan/40 via-white/10 to-transparent" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 gradient-text">Toolkit</h2>
          <p className="text-lg text-foreground/75 leading-relaxed">
            My toolkit spans synthesis (Serum, Vital, FM8), middleware (Wwise, FMOD), DAWs
            (Pro Tools, Ableton Live, Logic Pro), and game engines (Unity). I think about sound
            the way I think about code: modular, reactive, and always in service of the experience.
          </p>
        </motion.div>
      </section>

      {/* SoundCloud CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="glass-strong rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
          <Sparkles className="w-8 h-8 text-neon-magenta mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Listen to <span className="gradient-text">Nocean</span>
          </h2>
          <p className="text-foreground/75 mb-8 max-w-lg mx-auto">
            A selection of tracks and sound design work from my years producing electronic music.
          </p>
          <a
            href="https://on.soundcloud.com/bFskgiLZ949vcoxbyh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
          >
            Listen on SoundCloud
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Cross-links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h2 {...fadeUp} transition={{ duration: 0.7, ease }} className="font-display text-3xl font-bold mb-8 gradient-text">
          See how sound meets code
        </motion.h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/case-studies#snowball-runner', title: 'Snowball Runner', desc: 'Unity game with dynamic physics and audio' },
            { href: '/case-studies#ai-gym-bro', title: 'AI Gym Bro', desc: 'Where AI personality meets UX' },
            { href: '/creative-tech', title: 'Creative Tech', desc: 'Experiments and explorations' },
            { href: '/contact', title: 'Work With Me', desc: "Let's build something together" },
          ].map((l, i) => (
            <motion.div key={l.href} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05, ease }}>
              <Link href={l.href} className="neon-card group block p-5">
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-neon-cyan transition-colors">
                  {l.title}
                </h3>
                <p className="text-sm text-muted-foreground">{l.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
