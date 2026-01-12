'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Play, Volume2, Gamepad2 } from 'lucide-react';

const redesigns = [
  {
    id: 1,
    title: 'Black Myth: Wukong',
    type: 'Sound Redesign',
    description: 'Complete audio redesign of gameplay footage from Black Myth: Wukong, created as part of my Professional Certificate in Game Audio at Berklee.',
    tools: ['Pro Tools', 'Sound Design', 'Foley', 'Audio Post-Production'],
    youtubeId: '7MCjouhzlTE',
  },
  {
    id: 2,
    title: 'The Last of Us',
    type: 'Sound Redesign',
    description: 'Full sound redesign of gameplay footage from The Last of Us, showcasing environmental audio, combat sounds, and atmospheric design. Completed during my Berklee Professional Certificate program.',
    tools: ['Pro Tools', 'Sound Design', 'Ambience', 'Audio Post-Production'],
    youtubeId: '6QC6Zvc6zUQ',
  },
  {
    id: 3,
    title: 'AZUREUS: The Animated Series',
    type: 'Sound Redesign',
    description: 'Audio redesign for a scene from "AZUREUS: The Animated Series" by Black Sun Entertainment, featuring creature sounds, environmental audio, and cinematic sound design.',
    tools: ['Pro Tools', 'Sound Design', 'Creature Vocals', 'Cinematic Audio'],
    youtubeId: 'zIM8-oGjrJs',
  },
];

const implementations = [
  {
    id: 1,
    title: 'Stealth Unity Game',
    type: 'Wwise Implementation',
    description: 'Complete audio implementation for a stealth-based Unity game using Wwise middleware. Features dynamic music systems, enemy awareness states, and environmental audio triggers.',
    tools: ['Wwise', 'Unity', 'C#', 'Adaptive Audio'],
    youtubeId: 'gKL2tK7DXmU',
  },
  {
    id: 2,
    title: 'Marble Game',
    type: 'FMOD Implementation',
    description: 'Original marble game audio implementation using FMOD middleware. Includes physics-based audio reactions, surface material variations, and dynamic sound effects.',
    tools: ['FMOD', 'Unity', 'C#', 'Physics Audio'],
  },
];

export default function SoundDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="sound-design" ref={ref} className="py-96 sm:py-112 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Sound Design
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Audio redesigns and game audio implementations showcasing my expertise in sound design, middleware integration, and interactive audio.
          </p>
        </motion.div>

        {/* Sound Redesigns Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-12">
            <Volume2 className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-bold">Sound Redesigns</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {redesigns.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors"
              >
                {/* Video or Placeholder */}
                {project.youtubeId ? (
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
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent-secondary/20 relative group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
                      Video Coming Soon
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-2">
                      {project.type}
                    </div>
                    <h4 className="text-xl font-bold">{project.title}</h4>
                  </div>

                  <p className="text-foreground/80 text-sm leading-relaxed">
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Audio Implementations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Gamepad2 className="w-8 h-8 text-accent-secondary" />
            <h3 className="text-3xl font-bold">Audio Implementations</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-8"
          >
            {implementations.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent-secondary transition-colors"
              >
                {/* Video or Placeholder */}
                {project.youtubeId ? (
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
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-accent-secondary/20 to-accent/20 relative group cursor-pointer">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-accent-secondary/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-sm rounded-full">
                      Video Coming Soon
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div>
                    <div className="inline-block px-3 py-1 bg-accent-secondary/10 text-accent-secondary rounded-full text-sm mb-2">
                      {project.type}
                    </div>
                    <h4 className="text-xl font-bold">{project.title}</h4>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
