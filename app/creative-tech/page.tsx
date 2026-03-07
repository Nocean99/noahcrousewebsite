'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const skillAreas = [
  {
    category: 'AI & Machine Learning',
    skills: ['OpenAI API', 'GPT Integration', 'TensorFlow', 'Prompt Engineering', 'NLP'],
  },
  {
    category: 'Mobile & Frontend',
    skills: ['Flutter', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Data',
    skills: ['Python', 'Flask', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Game & Interactive',
    skills: ['Unity', 'C#', 'Physics Systems', 'Procedural Generation'],
  },
  {
    category: 'Audio & Sound Design',
    skills: ['Wwise', 'Ableton Live', 'Serum', 'Sound Design', 'Interactive Audio'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'CI/CD', 'Cursor', 'Xcode', 'Android Studio'],
  },
];

const explorations = [
  {
    title: 'AI-driven UX patterns',
    description: 'Exploring how conversational AI can replace traditional form-based interfaces in mobile apps.',
    tech: 'OpenAI, Flutter, UX Research',
  },
  {
    title: 'Procedural audio in games',
    description: 'Building sound systems that generate audio dynamically based on gameplay state instead of playing static files.',
    tech: 'Unity, Wwise, C#',
  },
  {
    title: 'Creative coding experiments',
    description: 'Small interactive pieces that explore the boundary between functional software and digital art.',
    tech: 'Various',
  },
];

const projectLinks = [
  { label: 'AI Apps', href: '/case-studies#ai-gym-bro', description: 'Conversational AI meets mobile UX' },
  { label: 'Interactive Tools', href: '/case-studies#dietpalai', description: 'Making complex tasks feel simple' },
  { label: 'Unity Projects', href: '/case-studies#snowball-runner', description: 'Games with dynamic physics' },
  { label: 'Audio Experiences', href: '/audio', description: 'Sound design and interactive audio' },
];

export default function CreativeTechPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Creative Technology
          </h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Where creativity and code make music together.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 gradient-text">What I Work With</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {skillAreas.map((area) => (
              <div
                key={area.category}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-3 text-foreground/90">{area.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Project Links */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold mb-8 gradient-text">Browse by Type</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {projectLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="p-5 bg-card border border-border rounded-xl hover:border-accent transition-colors group"
              >
                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* What I'm Exploring Now */}
        <motion.section
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            What I&apos;m Exploring Now
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed mb-8">
            I&apos;m always experimenting at the edges of what I know. These are the
            spaces I&apos;m digging into right now — not finished products, but active
            curiosities.
          </p>
          <div className="space-y-6">
            {explorations.map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-3">
                  {item.description}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.tech}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
