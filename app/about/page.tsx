'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full pt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-20"
        >
          <div className="w-72 h-72 relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border">
            <Image
              src="/headshot.png"
              alt="Noah Crouse"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <div className="space-y-20">
          {/* Who I Am */}
          <motion.section {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h2>
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                I&apos;m a multidisciplinary developer and audio designer with a passion
                for creating immersive digital experiences. I like making technology feel
                a little more human. Responsive, expressive, and just unpredictable
                enough to stay interesting.
              </p>
              <p>
                With over a decade of music production experience, I evolved from crafting
                sonic landscapes to building interactive applications that combine technology,
                design, and user experience. The transition felt natural. Both worlds are
                about shaping raw material into something people feel.
              </p>
            </div>
          </motion.section>

          {/* What I Build */}
          <motion.section {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
            <h2 className="text-2xl font-bold mb-4 gradient-text">What I Build</h2>
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                I build AI-powered social apps like{' '}
                <Link href="/case-studies#ai-gym-bro" className="text-accent hover:underline">
                  AI Gym Bro
                </Link>{' '}
                and{' '}
                <Link href="/case-studies#dietpalai" className="text-accent hover:underline">
                  DietPalAI
                </Link>
                , design games in Unity with dynamic physics and procedural generation,
                and create immersive audio experiences with advanced synthesis and
                middleware like Wwise.
              </p>
              <p>
                The common thread: everything I make has personality. I don&apos;t build
                tools that feel like tools. I build things that feel like they were made
                by a human who cares.
              </p>
            </div>
          </motion.section>

          {/* How I Work */}
          <motion.section {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
            <h2 className="text-2xl font-bold mb-4 gradient-text">How I Work</h2>
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                Ship fast, get feedback, and iterate. I believe in building products that
                solve real problems, using modern technologies like AI to create intuitive,
                conversational interfaces. Whether I&apos;m coding a Flutter app, designing
                game audio, or crafting soundscapes, the process is the same: prototype
                quickly, test with real people, and refine until it clicks.
              </p>
            </div>
          </motion.section>

          {/* What Drives Me */}
          <motion.section {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
            <h2 className="text-2xl font-bold mb-4 gradient-text">What Drives Me</h2>
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                The intersection of technology, creativity, and experience. I&apos;m
                fascinated by the moment when a tool stops feeling like software and starts
                feeling like a collaborator. When an AI coach actually motivates you, when
                a game sound makes you flinch, when an interface anticipates what you need.
              </p>
              <p>
                That space between &ldquo;functional&rdquo; and &ldquo;delightful&rdquo;
                is where I live.
              </p>
            </div>
          </motion.section>
        </div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-28 mb-32 flex flex-wrap gap-4 justify-center"
        >
          <Link
            href="/case-studies"
            className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:scale-105 transition-transform"
          >
            See my work
          </Link>
          <Link
            href="/audio"
            className="px-6 py-3 bg-transparent border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all"
          >
            Hear my sound
          </Link>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
