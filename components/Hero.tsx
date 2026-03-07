'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    title: 'AI Gym Bro',
    description: 'A conversational AI fitness tracker with suspiciously high enthusiasm.',
    image: '/gymbro.PNG',
    href: '/case-studies#ai-gym-bro',
  },
  {
    title: 'DietPalAI',
    description: 'A nutrition tracker that somehow understands chaotic food descriptions.',
    image: '/diet pal .png',
    href: '/case-studies#dietpalai',
  },
  {
    title: 'Snowball Runner',
    description: 'An endless downhill game with dynamic physics and procedural chaos.',
    image: '/snowball game.png',
    href: '/case-studies#snowball-runner',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            Noah Crouse
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light gradient-text mb-6">
            Creative Technologist
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Creative technologist blending AI, code, and a past life in electronic music.
          Building AI-powered mobile apps and interactive experiences that feel intuitive,
          purposeful, and human.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          <p>
            I&apos;m Noah — a creative technologist who builds AI-powered apps,
            interactive tools, and the occasional digital experiment that probably
            shouldn&apos;t work but somehow does.
          </p>
          <p className="mt-4">
            I like making technology feel a little more human — responsive, expressive,
            and just unpredictable enough to stay interesting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Link
            href="/case-studies"
            className="px-8 py-4 bg-accent text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
          >
            View Case Studies
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all"
          >
            Work With Me
          </Link>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mb-16"
        >
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Featured Work
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300"
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-left">
                  <h4 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block mt-3 text-xs text-accent font-medium">
                    View case study &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
