'use client';

import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import OrbitalScene from '@/components/three/OrbitalSceneClient';
import { ArrowRight, Code2, Music4, Sparkles, Cpu } from 'lucide-react';

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
  'AI · ', 'Flutter · ', 'React · ', 'Unity · ', 'Wwise · ', 'TypeScript · ',
  'Python · ', 'OpenAI · ', 'Ableton · ', 'TensorFlow · ', 'Next.js · ', 'PostgreSQL · ',
];

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />

      {/* Marquee */}
      <section className="py-10 border-y border-white/10 bg-background/40">
        <div className="marquee">
          <div className="marquee-track font-display text-3xl sm:text-5xl font-bold text-foreground/30">
            {[...marqueeWords, ...marqueeWords].map((w, i) => (
              <span key={i} className={i % 2 ? 'text-neon-magenta/40' : 'text-neon-cyan/30'}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Story section with floating 3D */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="blob" style={{ background: '#8a5cff', width: 500, height: 500, top: '20%', left: '-12%' }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-4">
              About / Focus
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              AI that does the <span className="gradient-text">hard work</span> for you.
            </h2>
            <div className="space-y-5 text-lg text-foreground/75 leading-relaxed">
              <p>
                I&apos;m currently in a graduate AI program at NSCC, staying close to emerging tools and
                industries while building end-to-end software focused on one thing: removing friction
                from the tedious parts of people&apos;s work.
              </p>
              <p>
                Projects like{' '}
                <Link href="/case-studies#ai-gym-bro" className="text-neon-cyan hover:text-neon-magenta transition-colors underline decoration-dotted underline-offset-4">
                  AI Gym Bro
                </Link>
                {' '}and{' '}
                <Link href="/case-studies#dietpalai" className="text-neon-cyan hover:text-neon-magenta transition-colors underline decoration-dotted underline-offset-4">
                  DietPalAI
                </Link>
                {' '}reflect that mindset: AI that fits the way you naturally think and talk,
                rather than forcing you to adapt to it.
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
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-violet/20 to-neon-magenta/20 blur-3xl" />
            <div className="relative w-full h-full">
              <OrbitalScene shape="knot" primary="#8a5cff" secondary="#00e7ff" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative py-32 sm:py-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">
              What I do / 003 modes
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">
              Three modes, <span className="gradient-text">one focus</span>.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                      className={`mb-6 w-14 h-14 rounded-2xl flex items-center justify-center border ${
                        color === 'cyan'
                          ? 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan shadow-[0_0_30px_rgba(0,231,255,0.2)]'
                          : color === 'magenta'
                          ? 'border-neon-magenta/40 bg-neon-magenta/10 text-neon-magenta shadow-[0_0_30px_rgba(255,61,240,0.2)]'
                          : 'border-neon-violet/40 bg-neon-violet/10 text-neon-violet shadow-[0_0_30px_rgba(138,92,255,0.2)]'
                      }`}
                    >
                      <p.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">{p.description}</p>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/60 group-hover:text-neon-cyan transition-colors">
                      Explore
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
      <section className="relative py-32 sm:py-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease }}
            className="relative glass-strong rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
          >
            <div className="blob" style={{ background: '#00e7ff', width: 300, height: 300, top: '-40%', left: '10%', opacity: 0.4 }} />
            <div className="blob" style={{ background: '#ff3df0', width: 280, height: 280, bottom: '-40%', right: '10%', opacity: 0.4, animationDelay: '3s' }} />

            <Sparkles className="w-8 h-8 text-neon-cyan mx-auto mb-6" />
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Got a wild idea?
              <br />
              <span className="gradient-text">Let&apos;s build it together.</span>
            </h2>
            <p className="text-lg text-foreground/75 max-w-xl mx-auto mb-10">
              Open to roles in creative technology, AI-driven experiences, and anything where
              code needs a creative pulse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-neon">
                Work With Me
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                See what I&apos;ve built
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
