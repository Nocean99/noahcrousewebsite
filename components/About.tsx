'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Smartphone, Brain, Dumbbell } from 'lucide-react';
import { techStack } from '@/lib/projects';
import Image from 'next/image';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Smartphone, label: '2+ Apps Published', color: 'text-blue-500' },
    { icon: Code2, label: 'Full-Stack Developer', color: 'text-purple-500' },
    { icon: Dumbbell, label: 'Fitness Enthusiast', color: 'text-green-500' },
    { icon: Brain, label: 'AI Integration Expert', color: 'text-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" ref={ref} className="py-64 sm:py-80 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          {/* Left side - Headshot */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/headshot.png"
                alt="Noah Crouse headshot"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a multidisciplinary developer and audio designer with a passion for creating
              immersive digital experiences. With over a decade of music production experience,
              I've evolved from crafting sonic landscapes to building interactive applications
              that combine technology, design, and user experience.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey spans mobile app development, game design, and sound engineering.
              I build AI-powered fitness apps like AI Gym Bro and DietPalAI that help people
              track their health, design games in Unity with dynamic physics and procedural
              generation, and create immersive audio experiences using advanced synthesis and
              middleware like Wwise.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach is simple: ship fast, get feedback, and iterate. I believe in
              building products that solve real problems, using modern technologies like
              AI to create intuitive, conversational interfaces. Whether I'm coding a Flutter
              app, designing game audio, or crafting soundscapes, I'm always pushing creative
              and technical boundaries.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me at the gym testing the very apps I build,
              experimenting with new sound design techniques, or exploring the intersection
              of technology and creativity. This hands-on approach ensures I'm creating
              solutions that truly work for users.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <p className="font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Tech Stack</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, technologies], idx) => (
              <motion.div
                key={category}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-colors"
              >
                <h4 className="text-xl font-semibold mb-4 capitalize gradient-text">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-foreground/80 rounded-full text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
