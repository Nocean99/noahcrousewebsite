'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, TestTube2 } from 'lucide-react';
import { projects } from '@/lib/projects';
import Image from 'next/image';

export default function Projects() {
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-48 sm:py-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real applications built and deployed, solving real problems for real users.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-20"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                  {/* Placeholder for actual project images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-secondary/10 group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm mb-3">
                    {project.status}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xl text-accent-secondary font-medium mb-4">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground/90">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">▸</span>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground/90">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-foreground/80 rounded-full text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
                    >
                      <Github className="w-5 h-5 group-hover:text-accent transition-colors" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.links.testflight && (
                    <a
                      href={project.links.testflight}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-accent-secondary text-white rounded-lg hover:scale-105 transition-transform"
                    >
                      <TestTube2 className="w-5 h-5" />
                      <span>TestFlight</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
