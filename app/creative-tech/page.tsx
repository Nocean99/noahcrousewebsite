'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Code2, Sparkles, ArrowRight } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

const skillAreas = [
  { category: 'AI & ML', skills: ['OpenAI API', 'Computer Vision', 'Pattern Recognition', 'TensorFlow', 'Prompt Engineering'], color: 'cyan' as const },
  { category: 'Autonomy & Robotics', skills: ['Mission Planning', 'Decision Support', 'Human-in-the-loop Systems', 'Sensor Workflows'], color: 'magenta' as const },
  { category: 'Mobile & Frontend', skills: ['Flutter', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'], color: 'magenta' as const },
  { category: 'Backend & Data', skills: ['Python', 'Flask', 'Node.js', 'PostgreSQL', 'REST APIs'], color: 'violet' as const },
  { category: 'Automation & Deployment', skills: ['Workflow Automation', 'Software Deployment', 'Data Pipelines', 'Git', 'CI/CD'], color: 'cyan' as const },
  { category: 'Audio & Sound', skills: ['Wwise', 'Ableton Live', 'Serum', 'Sound Design', 'Interactive Audio'], color: 'magenta' as const },
];

const explorations = [
  {
    title: 'AI-driven UX patterns',
    description: 'Exploring how conversational AI can replace traditional form-based interfaces in mobile apps.',
    tech: 'OpenAI · Flutter · UX Research',
  },
  {
    title: 'Procedural audio in games',
    description: 'Sound systems that generate audio dynamically based on gameplay state instead of playing static files.',
    tech: 'Unity · Wwise · C#',
  },
  {
    title: 'Creative coding experiments',
    description: 'Small interactive pieces exploring the boundary between functional software and digital art.',
    tech: 'WebGL · Three.js · React',
  },
];

const projectLinks = [
  { label: 'AI Apps', href: '/case-studies#ai-gym-bro', description: 'Conversational AI meets mobile UX' },
  { label: 'Interactive Tools', href: '/case-studies#dietpalai', description: 'Making complex tasks feel simple' },
  { label: 'Unity Projects', href: '/case-studies#snowball-runner', description: 'Games with dynamic physics' },
  { label: 'Audio Experiences', href: '/audio', description: 'Sound design and interactive audio' },
];

const colorRing = {
  cyan: 'border-zinc-800 hover:border-[#CCFF00]',
  magenta: 'border-zinc-800 hover:border-[#CCFF00]',
  violet: 'border-zinc-800 hover:border-[#CCFF00]',
};

const colorText = {
  cyan: 'text-neon-cyan',
  magenta: 'text-neon-magenta',
  violet: 'text-neon-violet',
};

export default function CreativeTechPage() {
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
              <Code2 className="w-3.5 h-3.5" />
              Tech / Stack
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6">
              Tools I use to <span className="gradient-text">build</span>.
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              A quick view of the stack behind my AI, autonomy, web, mobile, and audio projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="terminal-panel h-full p-6 flex flex-col justify-between">
              <div>
                <p className="terminal-label mb-5">Core stack</p>
                <div className="space-y-3 font-mono text-xs uppercase tracking-widest">
                  {['AI and ML', 'Autonomy and robotics', 'Computer vision', 'Workflow automation', 'Audio systems'].map((item, index) => (
                    <div key={item} className="flex items-center justify-between border-b border-zinc-900 pb-3">
                      <span className="text-muted-foreground">0{index + 1}</span>
                      <span className="text-foreground/80 text-right">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Code2 className="w-10 h-10 text-terminal-green" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-neon max-w-6xl mx-auto" />

      {/* Skills grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-cyan tracking-widest">01</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text">What I Work With</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillAreas.map((area, i) => (
            <motion.div
              key={area.category}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className={`glass p-6 border transition-all ${colorRing[area.color]}`}
            >
              <h3 className={`font-display font-bold mb-4 ${colorText[area.color]}`}>{area.category}</h3>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider border border-zinc-800 bg-black text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Browse by type */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-magenta tracking-widest">02</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text">Browse by Type</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {projectLinks.map((link, i) => (
            <motion.div key={link.label} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05, ease }}>
              <Link href={link.href} className="neon-card group block p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1 group-hover:text-neon-cyan transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-foreground/50 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explorations */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="mb-10">
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm text-neon-violet tracking-widest">03</span>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 gradient-text">
            Currently exploring
          </h2>
          <p className="text-lg text-foreground/70">
            Not finished products. Active curiosities.
          </p>
        </motion.div>

        <div className="space-y-5">
          {explorations.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              className="neon-card p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-neon-cyan shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/75 leading-relaxed mb-3">{item.description}</p>
                  <p className="text-xs font-mono uppercase tracking-widest text-neon-magenta">{item.tech}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
