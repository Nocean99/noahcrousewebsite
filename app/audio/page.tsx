'use client';

import { motion } from 'framer-motion';
import { Volume2, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
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
    description: 'Full sound redesign of gameplay footage from The Last of Us, showcasing environmental audio, combat sounds, and atmospheric design. Completed during my Berklee Professional Certificate program.',
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
    description: 'Complete audio implementation for a stealth-based Unity game using Wwise middleware. Features dynamic music systems, enemy awareness states, and environmental audio triggers.',
    tools: ['Wwise', 'Unity', 'C#', 'Adaptive Audio'],
    youtubeId: 'gKL2tK7DXmU',
  },
  {
    title: 'Marble Game',
    type: 'FMOD Implementation',
    description: 'Original marble game audio implementation using FMOD middleware. Includes physics-based audio reactions, surface material variations, and dynamic sound effects.',
    tools: ['FMOD', 'Unity', 'C#', 'Physics Audio'],
    youtubeId: 'LHttSkSFz_E',
  },
];

function VideoCard({ project }: { project: typeof redesigns[0] }) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors">
      <div className="aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${project.youtubeId}`}
          title={project.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-2">
            {project.type}
          </span>
          <h4 className="text-xl font-bold">{project.title}</h4>
        </div>
        <p className="text-foreground/70 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 bg-muted text-foreground/70 rounded-full text-xs border border-border"
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
    <main className="min-h-screen pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Game Audio &amp; Interactive Sound
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I design and implement interactive audio systems using synthesis,
            sampling, and middleware like Wwise and FMOD.
          </p>
        </motion.div>

        {/* The Story */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">The Story</h2>
          <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              For more than a decade, I produced electronic music under the name
              Nocean, shaping synths, layering textures, and building tracks that
              lived somewhere between ambient and experimental. Music taught me how
              sound shapes emotion, how a filter sweep can build tension, how silence
              can hit harder than a drop.
            </p>
            <p>
              Eventually I wanted to build more than beats. I wanted the sounds to
              respond, to react, to be part of something interactive. That&apos;s what
              pulled me into game audio and sound design. The idea that a sound
              isn&apos;t just heard, it&apos;s felt, and it changes based on what
              the player does.
            </p>
          </div>
        </motion.section>

        {/* Sound Redesigns */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Volume2 className="w-7 h-7 text-accent" />
            <h2 className="text-2xl font-bold">Sound Redesigns</h2>
          </div>
          <p className="text-foreground/60 mb-8 max-w-3xl">
            Complete audio redesigns of existing game and animation footage.
            stripping the original audio and rebuilding every layer from scratch.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {redesigns.map((project) => (
              <VideoCard key={project.title} project={project} />
            ))}
          </div>
        </motion.section>

        {/* Audio Implementations */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="w-7 h-7 text-accent-secondary" />
            <h2 className="text-2xl font-bold">Audio Implementations</h2>
          </div>
          <p className="text-foreground/60 mb-8 max-w-3xl">
            Game audio built from the ground up. Middleware integration, adaptive
            music systems, and physics-driven sound.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {implementations.map((project) => (
              <VideoCard key={project.title} project={project} />
            ))}
          </div>
        </motion.section>

        {/* What I Do */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">What I Work With</h2>
          <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
            <p>
              My toolkit spans synthesis (Serum, Vital, FM8), middleware (Wwise, FMOD),
              DAWs (Pro Tools, Ableton Live, Logic Pro), and game engines (Unity).
              I think about sound the way I think about code: modular, reactive, and
              always in service of the experience.
            </p>
          </div>
        </motion.section>

        {/* SoundCloud */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-3xl mx-auto mb-20"
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
          transition={{ duration: 0.6, delay: 0.5 }}
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
