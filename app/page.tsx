import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Story section */}
      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-lg text-foreground/70 leading-relaxed">
          <p>
            For more than a decade, I produced electronic music, shaping synths and
            building tracks. Eventually I wanted to build more than beats, so I taught
            myself to code and started creating things like{' '}
            <Link href="/case-studies#ai-gym-bro" className="text-accent hover:underline">
              AI Gym Bro
            </Link>
            , a workout companion with suspiciously high enthusiasm, and{' '}
            <Link href="/case-studies#dietpalai" className="text-accent hover:underline">
              DietPalAI
            </Link>
            , a nutrition tracker that somehow understands chaotic food descriptions.
          </p>
          <p>
            Now I build in the space where creativity and coding make music together.
            where apps have personality, tools feel human, and technology gets to be
            a little playful.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
