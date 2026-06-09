'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { FolderGit2, ArrowUpRight, Sparkles, Radar } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
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
  benchmark?: {
    modality: string;
    strategy: string;
    images: string;
    precision: string;
    recall: string;
    f1: string;
  }[];
  currentDirection?: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'aegis-mission-intelligence',
    title: 'Aegis Mission Intelligence',
    tagline: 'Multi-sensor mission intelligence',
    opening:
      'Aegis is my most recent AI/autonomy project: a simulation-first mission intelligence layer that turns sensor evidence into prioritized findings, analyst review workflows, mission memory, and structured mission reports.',
    whatItDoes:
      'Aegis takes a high-level mission request and moves it through mission planning, sensor evidence processing, proposal detection, semantic scoring, candidate ranking, analyst review, mission memory, and reporting. The goal is not just object detection. It is helping an operator decide which observations deserve attention while preserving uncertain evidence.',
    whyIBuiltIt:
      'The project began as a drone-based search and perception system, then evolved into a broader mission intelligence platform that can support RGB imagery, infrared imagery, video, and future acoustic or sonar inputs.',
    creativeProcess:
      'I designed Aegis around analyst burden rather than model spectacle. Each stage asks whether it helps preserve relevant evidence, reduce noisy review queues, or produce a clearer mission record.',
    technicalDecisions:
      'The system is benchmark-driven and simulation-first. I use Python evaluation pipelines, labeled datasets, capture precision, capture recall, and capture F1 to compare local triage strategies against semantic review strategies.',
    aiIntegration:
      'AI is used as part of a review and ranking layer, not as a black box. Local proposal systems preserve candidates, semantic scoring helps clean noisy queues, and mission memory keeps uncertainty available for human review.',
    howItWorks:
      'Mission Request -> Mission Planning -> Sensor Evidence -> Proposal Detection -> Semantic Scoring -> Candidate Ranking -> Analyst Review -> Mission Memory -> Mission Report.',
    whatILearned:
      'Review strategy should depend on sensor modality. RGB vehicle evidence benefited from semantic cleanup, while infrared evidence performed better with fast local hot-blob triage when the signal was already strong.',
    techStack: ['Python', 'Computer Vision', 'Evaluation Pipelines', 'RGB/IR Workflows', 'Human-in-the-loop AI'],
    links: [{ label: 'GitHub', href: 'https://github.com/Nocean99/Aegis' }],
    benchmark: [
      { modality: 'RGB', strategy: 'Local vehicle proposals', images: '500', precision: '50.0%', recall: '100.0%', f1: '66.7%' },
      { modality: 'RGB', strategy: 'API semantic review', images: '100', precision: '73.2%', recall: '95.3%', f1: '82.8%' },
      { modality: 'Infrared', strategy: 'Local hot-blob triage', images: '500', precision: '89.4%', recall: '100.0%', f1: '94.4%' },
      { modality: 'Infrared', strategy: 'API semantic review', images: '100', precision: '61.1%', recall: '100.0%', f1: '75.9%' },
    ],
    currentDirection: [
      'Aegis Vision Intelligence for RGB imagery',
      'Aegis Infrared Intelligence for thermal imagery',
      'Aegis Acoustic Intelligence for future sonar, hydrophone, and signal-based sensing',
    ],
  },
  {
    id: 'ai-gym-bro',
    title: 'AI Gym Bro',
    tagline: 'Your AI Fitness Companion',
    image: '/gymbro.PNG',
    opening:
      "AI Gym Bro represents the kind of work I love: blending AI, UX, personality, and mobile development to create experiences that feel human and useful. It's a coach who knows your abilities, a cheerleader who has your back, a personal trainer who reminds you that it's leg day no matter how much you want to skip.",
    whatItDoes:
      'A conversational AI fitness tracker where users log workouts by chatting with an enthusiastic "gym bro" personality. It uses GPT-4o-mini to parse natural language into structured workout data, track personal records, and provide motivational feedback.',
    whyIBuiltIt:
      'Every fitness app I tried felt like a spreadsheet. I wanted something that felt like texting a friend who happens to be really into lifting. Something that would remember my PRs, call me out when I skip legs, and actually make logging a workout feel fun.',
    creativeProcess:
      'I started by thinking about the voice. Before writing any code, I wrote sample conversations. what would this AI say when you hit a new PR? What about when you log a half-hearted workout? The personality came first, the architecture followed.',
    technicalDecisions:
      "Flutter for cross-platform mobile, Python Flask for the backend API, PostgreSQL for structured workout data, and OpenAI's API for the conversational layer. Flask for its simplicity. this app needed to be fast to iterate on, not over-engineered.",
    aiIntegration:
      'The AI layer does more than chat. It parses messy natural language ("did 3 sets of bench, 185 for 8 reps, then dropped to 135") into structured data, detects personal records automatically, and adapts its motivational tone based on workout patterns.',
    howItWorks:
      'Users type workouts in natural language. The AI parses input, extracts exercises/sets/reps/weight, stores it in PostgreSQL, checks for PRs, and responds with personality.',
    whatILearned:
      'Personality is a feature, not a gimmick. Users kept coming back not because tracking was better than competitors, but because the experience was more enjoyable. Prompt engineering: getting an AI to be consistently encouraging without being annoying is harder than it sounds.',
    techStack: ['Flutter', 'Python Flask', 'PostgreSQL', 'OpenAI API', 'Render'],
    links: [{ label: 'GitHub', href: 'https://github.com/nocean99/ai-gym-bro' }],
  },
  {
    id: 'dietpalai',
    title: 'DietPalAI',
    tagline: 'Smart Nutrition Tracking',
    image: '/diet pal .png',
    opening:
      'DietPalAI is what happens when you ask "what if a nutrition tracker actually understood how people talk about food?" Instead of searching databases for exact ingredients, you just describe what you ate. however chaotically. and the AI figures it out.',
    whatItDoes:
      'A nutrition tracking app that uses AI to parse natural language meal descriptions and automatically calculate calories and macros.',
    whyIBuiltIt:
      'Logging food is tedious. Most nutrition apps make you search through databases, weigh portions, and manually enter every ingredient. I wanted to just type "had a big bowl of pasta with chicken and some bread" and have it figure out the rest.',
    creativeProcess:
      'I focused on reducing friction to zero. The entire UX is built around one input: tell me what you ate. No dropdowns, no searches, no portion size selectors. The AI handles the ambiguity, and the interface stays clean.',
    technicalDecisions:
      'React for the web, Flutter for mobile, serverless functions to keep costs low, OpenAI for parsing. Deployed on Netlify for instant scaling.',
    aiIntegration:
      'The AI parses freeform meal descriptions into structured nutritional data. It handles vague quantities, combined meals, and corrects common food description quirks.',
    howItWorks:
      'Type what you ate in plain English. The AI breaks it into components, estimates portions, calculates macros, logs it. Daily dashboard with trends over time.',
    whatILearned:
      'Reducing friction is everything. The difference between "log your food in 5 taps" and "log your food in 1 sentence" is the difference between an app people use and one people abandon.',
    techStack: ['React', 'Flutter', 'Serverless Functions', 'OpenAI API', 'Netlify'],
    links: [{ label: 'GitHub', href: 'https://github.com/nocean99/dietpalai' }],
  },
  {
    id: 'snowball-runner',
    title: 'Snowball Runner',
    tagline: 'Endless Downhill Mayhem',
    image: '/snowball game.png',
    opening: '',
    whatItDoes:
      'An addictive endless runner where players guide a snowball down a procedurally generated mountain slope. The snowball dynamically grows with speed and shrinks on collision.',
    whyIBuiltIt:
      'I wanted to explore procedural generation and dynamic physics in Unity. The concept was simple enough to scope tightly but had enough depth to experiment with.',
    howItWorks:
      "The mountain terrain generates procedurally as you descend. Obstacles spawn with increasing density. The snowball's size is tied to velocity. Score scales with distance and speed.",
    whatILearned:
      'Game feel is everything. Tiny tweaks to the physics made the difference between "meh" and "one more run." Also got comfortable with Unity\'s physics system and procedural content generation.',
    techStack: ['Unity', 'C#', 'Unity Physics'],
    links: [{ label: 'GitHub', href: 'https://github.com/nocean99/snowball-runner' }],
  },
  {
    id: 'ai-image-detector',
    title: 'AI Image Detector',
    tagline: 'Detect AI-Generated Content',
    opening: '',
    whatItDoes:
      'A machine learning application that analyzes and identifies AI-generated images with high accuracy.',
    whyIBuiltIt:
      'With AI-generated images becoming indistinguishable from real photos, I wanted to explore the other side of the equation. can AI detect its own creations? A chance to dig into computer vision.',
    howItWorks:
      'Upload an image and the model analyzes it using a trained TensorFlow classifier. Looks for patterns common in AI-generated images. subtle artifacts, frequency domain anomalies, and texture inconsistencies.',
    whatILearned:
      'Working with image classification deepened my understanding of neural networks and data preprocessing. The biggest challenge: building a balanced training dataset.',
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React'],
    links: [{ label: 'GitHub', href: 'https://github.com/nocean99/ai-image-detector' }],
  },
];

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      id={study.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease }}
      className="scroll-mt-28"
    >
      <div className="neon-card overflow-hidden">
        {study.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image src={study.image} alt={study.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="chip mb-2">{study.tagline}</span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">{study.title}</h2>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-foreground/60">
                Case / 00{index + 1}
              </span>
            </div>
          </div>
        )}

        <div className="p-8 sm:p-12 space-y-10">
          {!study.image && (
            <div>
              <span className="chip mb-3">{study.tagline}</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold gradient-text">{study.title}</h2>
            </div>
          )}

          {study.opening && (
            <p className="text-foreground/70 text-lg leading-relaxed italic border-l-2 border-neon-cyan/50 pl-5">
              {study.opening}
            </p>
          )}

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">What it does</h3>
              <p className="text-foreground/75 leading-relaxed">{study.whatItDoes}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">Why I built this</h3>
              <p className="text-foreground/75 leading-relaxed">{study.whyIBuiltIt}</p>
            </div>
          </div>

          {(study.creativeProcess || study.technicalDecisions) && (
            <div className="grid sm:grid-cols-2 gap-8">
              {study.creativeProcess && (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">Creative process</h3>
                  <p className="text-foreground/75 leading-relaxed">{study.creativeProcess}</p>
                </div>
              )}
              {study.technicalDecisions && (
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">Technical decisions</h3>
                  <p className="text-foreground/75 leading-relaxed">{study.technicalDecisions}</p>
                </div>
              )}
            </div>
          )}

          {study.aiIntegration && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-violet mb-3">AI integration</h3>
              <p className="text-foreground/75 leading-relaxed">{study.aiIntegration}</p>
            </div>
          )}

          {study.benchmark && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-4">Benchmark-driven evaluation</h3>
              <div className="overflow-x-auto border border-white/10">
                <table className="data-table min-w-[720px]">
                  <thead>
                    <tr>
                      <th>Modality</th>
                      <th>Strategy</th>
                      <th>Images</th>
                      <th>Precision</th>
                      <th>Recall</th>
                      <th>F1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.benchmark.map((row) => (
                      <tr key={`${row.modality}-${row.strategy}`}>
                        <td>{row.modality}</td>
                        <td>{row.strategy}</td>
                        <td>{row.images}</td>
                        <td>{row.precision}</td>
                        <td>{row.recall}</td>
                        <td>{row.f1}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {study.currentDirection && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">Current direction</h3>
              <div className="grid sm:grid-cols-3 gap-3">
                {study.currentDirection.map((item) => (
                  <div key={item} className="border border-white/10 bg-white/[0.03] p-4 text-sm text-foreground/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">How it works</h3>
              <p className="text-foreground/75 leading-relaxed">{study.howItWorks}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">What I learned</h3>
              <p className="text-foreground/75 leading-relaxed">{study.whatILearned}</p>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/60 mb-3">Built with</h3>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider border border-white/10 bg-white/[0.03] text-foreground/70"
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
                  className="btn-ghost text-sm py-2.5 px-5"
                >
                  {link.label}
                  <ArrowUpRight className="w-4 h-4" />
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
    <main className="min-h-screen w-full pt-32 pb-20">
      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="lg:col-span-7"
          >
            <span className="chip mb-6">
              <FolderGit2 className="w-3.5 h-3.5" />
              Work / Case Studies
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6">
              Real projects, <span className="gradient-text">real stories</span>.
            </h1>
            <p className="text-xl text-foreground/75 max-w-xl leading-relaxed">
              The what, the why, and the how behind each build. Process notes, technical decisions,
              and what I&apos;d do differently next time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="lg:col-span-5 relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="terminal-panel h-full p-6 flex flex-col justify-between">
              <div>
                <p className="terminal-label mb-5">Project highlights</p>
                <div className="space-y-3 font-mono text-xs uppercase tracking-widest">
                  {[
                    ['Lead project', 'Aegis'],
                    ['Evaluation', 'Capture F1'],
                    ['Evidence', 'RGB / IR / Video'],
                    ['Next module', 'Acoustic'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="text-terminal-green text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Radar className="w-10 h-10 text-terminal-green" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-neon max-w-6xl mx-auto mb-20" />

      {/* Case studies list */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-24">
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={study.id} study={study} index={index} />
        ))}
      </div>

      {/* Closing CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} transition={{ duration: 0.7, ease }} className="terminal-panel p-10 sm:p-14 text-center">
          <Sparkles className="w-8 h-8 text-neon-cyan mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            More on <span className="gradient-text">GitHub</span>.
          </h2>
          <p className="text-foreground/75 mb-8 max-w-lg mx-auto">
            Side projects, experiments, and half-finished ideas live there too.
          </p>
          <a href="https://github.com/nocean99" target="_blank" rel="noopener noreferrer" className="btn-neon">
            Visit GitHub
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
