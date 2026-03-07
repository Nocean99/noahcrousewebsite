'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  image?: string;
  opening: string;
  whatItDoes: string;
  whyIBuiltIt: string;
  creativeProcess?: string;
  technicalDecisions?: string;
  aiIntegration?: string;
  howItWorks: string;
  whatILearned: string;
  techStack: string[];
  links: { label: string; href: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ai-gym-bro',
    title: 'AI Gym Bro',
    tagline: 'Your AI Fitness Companion',
    image: '/gymbro.PNG',
    opening:
      'AI Gym Bro represents the kind of work I love: blending AI, UX, personality, and mobile development to create experiences that feel human and useful. It\'s not just a fitness tracker. it\'s a coach who knows your abilities, a cheerleader who has your back, a personal trainer who reminds you that it\'s leg day, no matter how much you want to skip. And it\'s an example of how AI can make everyday tasks more fun and individualized.',
    whatItDoes:
      'A conversational AI fitness tracker where users log workouts by chatting with an enthusiastic "gym bro" personality. It uses GPT-4o-mini to parse natural language into structured workout data, track personal records, and provide motivational feedback.',
    whyIBuiltIt:
      'Every fitness app I tried felt like a spreadsheet. I wanted something that felt like texting a friend who happens to be really into lifting. Something that would remember my PRs, call me out when I skip legs, and actually make logging a workout feel fun instead of like homework.',
    creativeProcess:
      'I started by thinking about the voice. Before writing any code, I wrote sample conversations. what would this AI say when you hit a new PR? What about when you log a half-hearted workout? The personality came first, and the architecture followed. I wanted every interaction to feel like it came from someone who genuinely cares about your progress.',
    technicalDecisions:
      'Flutter for cross-platform mobile, Python Flask for the backend API, PostgreSQL for structured workout data, and OpenAI\'s API for the conversational layer. I chose Flask for its simplicity. this app needed to be fast to iterate on, not over-engineered.',
    aiIntegration:
      'The AI layer does more than chat. It parses messy natural language ("did 3 sets of bench, 185 for 8 reps, then dropped to 135") into structured data, detects personal records automatically, and adapts its motivational tone based on workout patterns.',
    howItWorks:
      'Users type their workouts in natural language. The AI parses the input, extracts exercises/sets/reps/weight, stores it in PostgreSQL, checks for PRs, and responds with personality. The backend handles all the data logic while the AI handles the conversation.',
    whatILearned:
      'Personality is a feature, not a gimmick. Users kept coming back not because the tracking was better than competitors, but because the experience was more enjoyable. I also learned a lot about prompt engineering. getting an AI to be consistently encouraging without being annoying is harder than it sounds.',
    techStack: ['Flutter', 'Python Flask', 'PostgreSQL', 'OpenAI API', 'Render'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nocean99/ai-gym-bro' },
    ],
  },
  {
    id: 'dietpalai',
    title: 'DietPalAI',
    tagline: 'Smart Nutrition Tracking',
    image: '/diet pal .png',
    opening:
      'DietPalAI is what happens when you ask "what if a nutrition tracker actually understood how people talk about food?" Instead of searching databases for exact ingredients, you just describe what you ate. however chaotically. and the AI figures it out.',
    whatItDoes:
      'A nutrition tracking app that uses AI to parse natural language meal descriptions and automatically calculate calories and macros. Designed for both web and mobile to make healthy eating effortless.',
    whyIBuiltIt:
      'Logging food is tedious. Most nutrition apps make you search through databases, weigh portions, and manually enter every ingredient. I wanted to just type "had a big bowl of pasta with chicken and some bread on the side" and have it figure out the rest.',
    creativeProcess:
      'I focused on reducing friction to zero. The entire UX is built around one input: tell me what you ate. No dropdowns, no searches, no portion size selectors. Just language. The AI handles the ambiguity, and the interface stays clean.',
    technicalDecisions:
      'React for the web interface, Flutter for mobile, serverless functions for the backend to keep costs low, and OpenAI for the natural language parsing. Deployed on Netlify for instant scaling.',
    aiIntegration:
      'The AI parses freeform meal descriptions into structured nutritional data. calories, protein, carbs, fat. It handles vague quantities ("a big bowl"), combined meals ("chicken stir fry with rice"), and even corrects common food description quirks.',
    howItWorks:
      'Type what you ate in plain English. The AI breaks it into components, estimates portions, calculates macros, and logs it. You get a daily dashboard showing your intake with trends over time.',
    whatILearned:
      'Reducing friction is everything. The difference between "log your food in 5 taps" and "log your food in 1 sentence" is the difference between an app people use and an app people abandon. Also learned about handling AI uncertainty gracefully. sometimes the AI guesses wrong, and the UX needs to make corrections easy.',
    techStack: ['React', 'Flutter', 'Serverless Functions', 'OpenAI API', 'Netlify'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nocean99/dietpalai' },
    ],
  },
  {
    id: 'snowball-runner',
    title: 'Snowball Runner',
    tagline: 'Endless Downhill Mayhem',
    image: '/snowball game.png',
    whatItDoes:
      'An addictive endless runner where players guide a snowball down a procedurally generated mountain slope. The snowball dynamically grows with speed and shrinks on collision, creating a unique risk-reward gameplay loop.',
    opening: '',
    whyIBuiltIt:
      'I wanted to explore procedural generation and dynamic physics in Unity. The concept was simple enough to scope tightly but had enough depth to experiment with. how does the snowball\'s changing size affect the feel? When does growing feel powerful vs. dangerous?',
    howItWorks:
      'The mountain terrain generates procedurally as you descend. Obstacles (trees, skiers) spawn with increasing density. The snowball\'s size is tied to velocity. go fast and you grow, hit something and you shrink. Score scales with distance and speed.',
    whatILearned:
      'Game feel is everything. Tiny tweaks to the physics. how fast the ball grows, how much it shrinks on impact, the camera shake on collision. made the difference between "meh" and "one more run." Also got comfortable with Unity\'s physics system and procedural content generation.',
    techStack: ['Unity', 'C#', 'Unity Physics'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nocean99/snowball-runner' },
    ],
  },
  {
    id: 'ai-image-detector',
    title: 'AI Image Detector',
    tagline: 'Detect AI-Generated Content',
    whatItDoes:
      'A machine learning application that analyzes and identifies AI-generated images with high accuracy, helping users distinguish between authentic and AI-created visual content.',
    opening: '',
    whyIBuiltIt:
      'With AI-generated images becoming indistinguishable from real photos, I wanted to explore the other side of the equation. can AI detect its own creations? It was a chance to dig into computer vision and understand what makes generated images subtly different.',
    howItWorks:
      'Upload an image and the model analyzes it using a trained TensorFlow classifier. It looks for patterns common in AI-generated images. subtle artifacts, frequency domain anomalies, and texture inconsistencies. and returns a confidence score.',
    whatILearned:
      'Working with image classification deepened my understanding of neural networks and data preprocessing. The biggest challenge was building a balanced training dataset. the model is only as good as the examples it learns from.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    links: [
      { label: 'GitHub', href: 'https://github.com/nocean99/ai-image-detector' },
    ],
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      id={study.id}
      {...fadeUp}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="scroll-mt-24"
    >
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg shadow-black/20">
        {study.image && (
          <div className="relative aspect-video bg-muted">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
          </div>
        )}

        <div className="p-8 sm:p-12 space-y-10">
          <div>
            <p className="text-sm text-accent font-medium mb-2">{study.tagline}</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">{study.title}</h2>
            {study.opening && (
              <p className="text-foreground/60 text-lg leading-relaxed italic">
                {study.opening}
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground/90">What it does</h3>
              <p className="text-foreground/70 leading-relaxed">{study.whatItDoes}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground/90">Why I built this</h3>
              <p className="text-foreground/70 leading-relaxed">{study.whyIBuiltIt}</p>
            </div>
          </div>

          {(study.creativeProcess || study.technicalDecisions) && (
            <div className="grid sm:grid-cols-2 gap-8">
              {study.creativeProcess && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground/90">Creative process</h3>
                  <p className="text-foreground/70 leading-relaxed">{study.creativeProcess}</p>
                </div>
              )}
              {study.technicalDecisions && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground/90">Technical decisions</h3>
                  <p className="text-foreground/70 leading-relaxed">{study.technicalDecisions}</p>
                </div>
              )}
            </div>
          )}

          {study.aiIntegration && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground/90">AI integration</h3>
              <p className="text-foreground/70 leading-relaxed">{study.aiIntegration}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground/90">How it works</h3>
              <p className="text-foreground/70 leading-relaxed">{study.howItWorks}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-foreground/90">What I learned</h3>
              <p className="text-foreground/70 leading-relaxed">{study.whatILearned}</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground/60 uppercase tracking-wider">
              Built with
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-sm border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {study.links.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-2">
              {study.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-muted border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen w-full pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real projects with real stories. the what, the why, and the how behind each build.
          </p>
        </motion.div>

        <div className="space-y-20 mb-32">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
