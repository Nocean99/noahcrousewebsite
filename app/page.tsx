'use client';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Music4, Sparkles, Cpu, Radar } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    icon: Cpu,
    title: 'AI Apps',
    description: 'Conversational interfaces, GPT pipelines, and AI flows that feel human, not robotic.',
    color: 'cyan',
    href: '/case-studies',
  },
  {
    icon: Music4,
    title: 'Creative Outlet',
    description: 'I still produce music as Nocean semi-regularly. It keeps me creative and informs how I think about experience design.',
    color: 'magenta',
    href: '/audio',
  },
  {
    icon: Code2,
    title: 'Creative Tech',
    description: 'Apps, tools, and prototypes built where code, design, and personality intersect.',
    color: 'violet',
    href: '/creative-tech',
  },
];

const marqueeWords = [
  'AUTOMATION · ', 'AGENTIC WORKFLOWS · ', 'LLM OPS · ', 'AI PRODUCTS · ', 'PYTHON · ', 'TYPESCRIPT · ',
  'OPENAI · ', 'LANGCHAIN · ', 'NEXT.JS · ', 'FLUTTER · ', 'TENSORFLOW · ', 'POSTGRESQL · ',
];

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />

      {/* Marquee */}
      <section className="py-8 border-y border-zinc-800 bg-black">
        <div className="marquee">
          <div className="marquee-track font-display text-3xl sm:text-5xl font-black text-zinc-800 uppercase">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className={i % 2 ? 'text-[#CCFF00]/55' : 'text-zinc-700'}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <p className="technical-sm text-[#CCFF00] mb-4">
              Focus
            </p>
            <h2 className="headline-lg text-white uppercase mb-8">
              AI systems for <span className="text-[#CCFF00]">real-world workflows</span>.
            </h2>
            <div className="space-y-5 text-base text-zinc-400 leading-relaxed">
              <p>
                My work focuses on applied AI, autonomy, perception, and decision-support systems.
                I&apos;m especially interested in software that helps people interpret evidence,
                automate repetitive workflows, and make better decisions.
              </p>
              <p>
                My latest project,{' '}
                <Link href="/case-studies#aegis-mission-intelligence" className="text-[#CCFF00] hover:text-[#abd600] transition-colors underline decoration-dotted underline-offset-4">
                  Aegis Mission Intelligence
                </Link>
                , brings that focus into a simulation-first autonomy and mission intelligence workflow.
              </p>
            </div>
            <Link href="/about" className="btn-ghost mt-10">
              Read more about me
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="terminal-panel h-full p-6 flex flex-col justify-between">
              <div>
                <p className="terminal-label mb-5">How I think about systems</p>
                <div className="space-y-3 font-mono text-xs uppercase tracking-widest">
                  {['Understand the goal', 'Plan the workflow', 'Collect evidence', 'Rank what matters', 'Keep humans in control', 'Report clearly'].map((step, index) => (
                    <div key={step} className="flex items-center gap-3 border border-zinc-800 bg-black p-3">
                      <span className="text-[#CCFF00]">0{index + 1}</span>
                      <span className="text-zinc-400">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Radar className="w-10 h-10 text-terminal-green mt-8" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease }}
            className="mb-10 border-l-4 border-[#CCFF00] pl-4"
          >
            <p className="technical-sm text-[#CCFF00] mb-3">
              Focus areas
            </p>
            <h2 className="headline-lg text-white uppercase">
              Three focus areas, <span className="text-[#CCFF00]">one portfolio</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
            {pillars.map((p, i) => {
              const color = p.color;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                >
                  <Link
                    href={p.href}
                    className="neon-card group block p-8 h-full"
                  >
                    <div
                      className={`mb-6 w-14 h-14 flex items-center justify-center border ${
                        color === 'cyan'
                          ? 'border-[#CCFF00] bg-black text-[#CCFF00]'
                          : color === 'magenta'
                          ? 'border-zinc-700 bg-black text-zinc-300'
                          : 'border-zinc-700 bg-black text-zinc-500'
                      }`}
                    >
                      <p.icon className="w-7 h-7" />
                    </div>
                    <h3 className="headline-md text-xl mb-3 group-hover:text-[#CCFF00] uppercase transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{p.description}</p>
                    <span className="inline-flex items-center gap-1.5 technical-sm text-zinc-500 group-hover:text-[#CCFF00] transition-colors">
                      EXPLORE
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
            className="relative terminal-panel p-10 sm:p-16 text-center overflow-hidden"
          >
            <Sparkles className="w-8 h-8 text-[#CCFF00] mx-auto mb-6" />
            <h2 className="headline-lg text-white uppercase mb-6">
              Got a wild idea?
              <br />
              <span className="text-[#CCFF00]">Let&apos;s build it together.</span>
            </h2>
            <p className="text-base text-zinc-400 max-w-xl mx-auto mb-10">
              Open to AI, autonomy, computer vision, workflow automation, and creative technology work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-neon">
                Work with me
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                View my work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
