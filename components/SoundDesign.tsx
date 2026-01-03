'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Volume2, Music, Headphones } from 'lucide-react';

export default function SoundDesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const soundProjects = [
    {
      title: 'Game Audio Design',
      description: 'Interactive sound design for Unity games featuring dynamic audio systems, procedural music generation, and immersive spatial audio.',
      category: 'Game Audio',
      icon: Music,
      videoUrl: '', // Add your video URL here
      tags: ['Unity', 'Wwise', 'FMOD', 'Procedural Audio'],
    },
    {
      title: 'Music Production',
      description: 'Over a decade of electronic music production, sound design, and mixing. Creating atmospheric soundscapes and dynamic compositions.',
      category: 'Production',
      icon: Volume2,
      videoUrl: '', // Add your video URL here
      tags: ['Ableton Live', 'Synthesis', 'Mixing', 'Mastering'],
    },
    {
      title: 'Interactive Audio',
      description: 'Middleware integration and adaptive music systems that respond to gameplay and user interactions in real-time.',
      category: 'Interactive',
      icon: Headphones,
      videoUrl: '', // Add your video URL here
      tags: ['Wwise', 'Interactive Music', 'Dynamic Systems'],
    },
  ];

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
    <section id="sound-design" ref={ref} className="py-80 sm:py-96 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-48"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-20">
            Sound Design & Audio
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-20" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting immersive audio experiences for games, interactive media, and music production.
            Over 10 years of sound design and music creation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-40"
        >
          {soundProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}
            >
              {/* Video/Media Section */}
              <div className="w-full lg:w-1/2">
                {project.videoUrl ? (
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                    <iframe
                      src={project.videoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl overflow-hidden group flex items-center justify-center">
                    <project.icon className="w-24 h-24 text-accent/40 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-secondary/10 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-3">
                    {project.category}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-3">
                    {project.title}
                  </h3>
                </div>

                <p className="text-foreground/80 leading-loose text-lg">
                  {project.description}
                </p>

                {/* Tags */}
                <div>
                  <h4 className="font-semibold mb-4 text-foreground/90">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-foreground/80 rounded-full text-sm border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SoundCloud Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-48"
        >
          <h3 className="text-3xl font-bold text-center mb-16">Listen to My Work</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <p className="text-center text-foreground/70 mb-8 leading-relaxed">
                Explore my music production and sound design work on SoundCloud
              </p>
              <a
                href="https://on.soundcloud.com/bFskgiLZ949vcoxbyh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg"
              >
                <Music className="w-5 h-5" />
                Visit SoundCloud Profile
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
