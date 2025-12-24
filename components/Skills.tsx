'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Users, Rocket, Target } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const principles = [
    {
      icon: Users,
      title: 'User-First',
      description: 'I believe in rapid prototyping and real user testing over complex feature engineering',
    },
    {
      icon: Zap,
      title: 'AI-Enhanced',
      description: 'Leveraging AI to create intuitive, conversational interfaces that feel natural',
    },
    {
      icon: Target,
      title: 'Health Tech',
      description: 'Combining my passion for fitness with development to solve real problems',
    },
    {
      icon: Rocket,
      title: 'Ship Fast, Iterate',
      description: 'Getting products in users\' hands quickly, then improving based on feedback',
    },
  ];

  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'iOS Development', level: 85 },
        { name: 'Android Development', level: 85 },
        { name: 'React Native', level: 75 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      category: 'Backend & AI',
      skills: [
        { name: 'Python/Flask', level: 85 },
        { name: 'OpenAI API', level: 90 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'REST APIs', level: 88 },
      ],
    },
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
    <section id="skills" ref={ref} className="py-96 sm:py-112 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
            Skills & Approach
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-32"
        >
          <h3 className="text-3xl font-bold text-center mb-12">My Approach</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent transition-all group"
              >
                <principle.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-semibold mb-3">{principle.title}</h4>
                <p className="text-foreground/70">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <h4 className="text-xl font-semibold mb-6 gradient-text">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                          className="h-full bg-gradient-to-r from-accent to-accent-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline placeholder for future enhancement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary text-white rounded-full">
            <p className="font-medium">Continuously learning and building</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
