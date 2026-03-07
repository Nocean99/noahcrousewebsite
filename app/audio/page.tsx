'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function AudioPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Game Audio &amp; Interactive Sound
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I design and implement interactive audio systems using synthesis,
            sampling, and middleware like Wwise.
          </p>
        </motion.div>

        {/* The Story */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">The Story</h2>
          <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              For more than a decade, I produced electronic music under the name
              Nocean — shaping synths, layering textures, and building tracks that
              lived somewhere between ambient and experimental. Music taught me how
              sound shapes emotion, how a filter sweep can build tension, how silence
              can hit harder than a drop.
            </p>
            <p>
              Eventually I wanted to build more than beats. I wanted the sounds to
              respond, to react, to be part of something interactive. That&apos;s what
              pulled me into game audio and sound design — the idea that a sound
              isn&apos;t just heard, it&apos;s felt, and it changes based on what
              the player does.
            </p>
          </div>
        </motion.section>

        {/* What I Do */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">What I Do</h2>
          <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              I design interactive audio systems for games and digital experiences —
              dynamic soundscapes that respond to gameplay, UI sounds that give
              interfaces texture, and ambient layers that make virtual worlds feel
              alive.
            </p>
            <p>
              My toolkit spans synthesis (Serum, Vital, FM8), middleware (Wwise),
              DAWs (Ableton Live, Logic Pro), and game engines (Unity). I think about
              sound the way I think about code: modular, reactive, and always in
              service of the experience.
            </p>
          </div>
        </motion.section>

        {/* SoundCloud */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">Listen</h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-6">
            A selection of tracks and sound design work from my years producing
            electronic music as Nocean.
          </p>
          <a
            href="https://on.soundcloud.com/bFskgiLZ949vcoxbyh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Listen on SoundCloud &rarr;
          </a>
        </motion.section>

        {/* Cross-links */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text">
            See How Sound Meets Code
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/case-studies#snowball-runner"
              className="p-5 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <h3 className="font-semibold mb-1">Snowball Runner</h3>
              <p className="text-sm text-muted-foreground">Unity game with dynamic physics and audio</p>
            </Link>
            <Link
              href="/case-studies#ai-gym-bro"
              className="p-5 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <h3 className="font-semibold mb-1">AI Gym Bro</h3>
              <p className="text-sm text-muted-foreground">Where AI personality meets UX</p>
            </Link>
            <Link
              href="/creative-tech"
              className="p-5 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <h3 className="font-semibold mb-1">Creative Tech</h3>
              <p className="text-sm text-muted-foreground">Experiments and explorations</p>
            </Link>
            <Link
              href="/contact"
              className="p-5 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <h3 className="font-semibold mb-1">Work With Me</h3>
              <p className="text-sm text-muted-foreground">Let&apos;s build something together</p>
            </Link>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
