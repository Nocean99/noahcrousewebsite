'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Music } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nocean99',
      text: 'github.com/nocean99',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/noahcrouse',
      text: 'linkedin.com/in/noahcrouse',
    },
    {
      icon: Music,
      label: 'SoundCloud',
      href: 'https://on.soundcloud.com/bFskgiLZ949vcoxbyh',
      text: 'soundcloud.com/noahcrouse',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-96 sm:py-112">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-16" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto space-y-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-foreground/70 mb-6">
              I'm currently open to freelance projects and collaboration opportunities.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-600 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for freelance projects
            </div>
          </div>

          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors group"
              >
                <link.icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-medium">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.text}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-foreground/70 mb-4 text-center">Currently working on:</p>
            <div className="p-4 bg-card border border-border rounded-lg">
              <p className="font-semibold gradient-text">AI Gym Bro V2</p>
              <p className="text-sm text-muted-foreground mt-1">
                Adding advanced workout analytics and social features
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
