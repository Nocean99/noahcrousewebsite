'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import HeroScene from './three/HeroSceneClient';

const featuredProjects = [
  {
    title: 'AI Gym Bro',
    description: 'A conversational AI fitness tracker with suspiciously high enthusiasm.',
    image: '/gymbro.PNG',
    href: '/case-studies#ai-gym-bro',
    tag: 'AI · Mobile',
  },
  {
    title: 'DietPalAI',
    description: 'Log meals in plain language or with precise measurements — the AI handles both equally well.',
    image: '/diet pal .png',
    href: '/case-studies#dietpalai',
    tag: 'AI · Web',
  },
  {
    title: 'Snowball Runner',
    description: 'An endless downhill game with dynamic physics and procedural chaos.',
    image: '/snowball game.png',
    href: '/case-studies#snowball-runner',
    tag: 'Unity · Game',
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* 3D Background scene */}
      <div className="absolute inset-0 -z-10 opacity-90">
        <HeroScene />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

      {/* Decorative blobs */}
      <div className="blob -z-10" style={{ background: '#00e7ff', width: 420, height: 420, top: '8%', left: '-8%' }} />
      <div className="blob -z-10" style={{ background: '#ff3df0', width: 380, height: 380, top: '30%', right: '-6%', animationDelay: '4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20 sm:pt-48 sm:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="flex justify-center mb-8"
        >
          <span className="chip">
            <Sparkles className="w-3.5 h-3.5" />
            Available for new work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.05 }}
          className="text-center font-display font-bold tracking-tight text-[clamp(3rem,8vw,7rem)] leading-[0.95]"
        >
          <span className="block">Noah Crouse</span>
          <span className="block gradient-text mt-2">Creative Technologist</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-8 mx-auto max-w-2xl text-center text-lg sm:text-xl text-foreground/75 leading-relaxed"
        >
          I build end-to-end AI software that handles the tedious parts of people&apos;s work.
          Studying AI at NSCC and always exploring where intelligent tools can unlock more creativity and efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/case-studies" className="btn-neon">
            View Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Work With Me
          </Link>
        </motion.div>

        {/* Live status bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_var(--neon-cyan)]" />
            Flutter · React · Python
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-magenta shadow-[0_0_10px_var(--neon-magenta)]" />
            Unity · Wwise · FMOD
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-violet shadow-[0_0_10px_var(--neon-violet)]" />
            GPT · TensorFlow · OpenAI
          </span>
        </motion.div>
      </div>

      {/* Featured projects grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-10 flex items-end justify-between flex-wrap gap-4"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-2">
              Featured Work / 003
            </p>
            <h3 className="font-display text-3xl sm:text-4xl font-bold">
              Selected experiments
            </h3>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 text-foreground/70 hover:text-neon-cyan transition-colors font-display"
          >
            See all case studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <Link
                href={project.href}
                className="neon-card group block overflow-hidden h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute top-3 left-3 chip text-[10px]">{project.tag}</span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-neon-magenta">
                    Case study
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
