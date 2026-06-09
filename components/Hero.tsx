'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Radar, Sparkles } from 'lucide-react';

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-6"
        >
          <span className="chip">
            <Sparkles className="w-3.5 h-3.5" />
            Available for opportunities
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-end border-b border-zinc-800 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="lg:col-span-8"
          >
            <h1 className="headline-xl text-white uppercase mb-3">
              <span className="block">NOAH</span>
              <span className="block text-[#CCFF00]">CROUSE.</span>
            </h1>
            <p className="text-lg text-zinc-400 mb-8 max-w-xl">
              AI and autonomy developer building mission intelligence systems, computer vision workflows, and applied AI software.
            </p>
            <div className="text-sm text-zinc-500 mb-8 space-y-1 font-mono">
              <p>Python / computer vision / robotics</p>
              <p>mission intelligence and decision support</p>
              <p>workflow automation and human-AI systems</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/case-studies" className="btn-neon">
                View my work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Contact me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.18 }}
            className="lg:col-span-4 border border-zinc-800 p-5 bg-black"
          >
            <p className="terminal-label mb-5">Profile</p>
            <div className="space-y-4 font-mono text-xs uppercase tracking-widest">
              {[
                ['Focus', 'AI & autonomy'],
                ['Location', 'Lunenburg, NS'],
                ['Recent work', 'Aegis mission intelligence'],
                ['Stack', 'Python / CV / React'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-zinc-900 pb-3">
                  <span className="text-zinc-600">{label}</span>
                  <span className="text-[#CCFF00] text-right">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="border border-zinc-800 p-6 sm:p-8 bg-black"
        >
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <span className="chip mb-5">
                <Radar className="w-3.5 h-3.5" />
                Recent project
              </span>
              <h2 className="headline-lg text-white uppercase mb-5">
                AEGIS MISSION
                <br />
                <span className="text-[#CCFF00]">INTELLIGENCE.</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
                A simulation-first multi-sensor intelligence platform that turns RGB, infrared, video, and future acoustic evidence into prioritized findings, analyst review queues, mission memory, and structured reports.
              </p>
              <Link href="/case-studies#aegis-mission-intelligence" className="btn-ghost mt-8">
                Read case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 content-start">
              {[
                ['RGB review', '82.8% F1'],
                ['Infrared triage', '94.4% F1'],
                ['Workflow', 'Human review'],
                ['Direction', 'Vision / IR / acoustic'],
              ].map(([label, value]) => (
                <div key={label} className="bg-black p-4">
                  <p className="technical-sm text-zinc-500 mb-2">{label}</p>
                  <p className="headline-md text-[#CCFF00] uppercase">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured projects grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease }}
          className="mb-5 flex items-end justify-between flex-wrap gap-4 border-l-4 border-[#CCFF00] pl-4"
        >
          <div>
            <h3 className="headline-md text-white uppercase">
              Featured work
            </h3>
          </div>
          <Link
            href="/case-studies"
            className="technical-sm text-zinc-500 hover:text-[#CCFF00]"
          >
            See all work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
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
                className="group block overflow-hidden h-full bg-black hover:bg-zinc-900 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover grayscale opacity-55 transition-all duration-500 group-hover:opacity-90 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute top-3 left-3 chip text-[10px]">{project.tag}</span>
                </div>
                <div className="p-5">
                  <h4 className="headline-md text-xl mb-2 group-hover:text-[#CCFF00] uppercase transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 technical-sm text-[#CCFF00]">
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
