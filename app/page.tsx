import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import SoundDesign from '@/components/SoundDesign';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* About Section with generous spacing */}
      <div className="py-64 md:py-80">
        <About />
      </div>
      
      {/* Projects Section with generous spacing */}
      <div className="py-64 md:py-80">
        <Projects />
      </div>
      
      {/* Sound Design Section with generous spacing */}
      <div className="py-64 md:py-80">
        <SoundDesign />
      </div>
      
      {/* Skills Section with generous spacing */}
      <div className="py-64 md:py-80">
        <Skills />
      </div>
      
      {/* Contact Section with generous spacing */}
      <div className="py-64 md:py-80">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}