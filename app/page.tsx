import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import SoundDesign from '@/components/SoundDesign';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <div className="w-full">
        <Hero />
      </div>
      
      {/* About Section with generous spacing */}
      <div className="py-64 md:py-80 w-full">
        <About />
      </div>
      
      {/* Projects Section with generous spacing */}
      <div className="py-64 md:py-80 w-full">
        <Projects />
      </div>
      
      {/* Sound Design Section with generous spacing */}
      <div className="py-64 md:py-80 w-full">
        <SoundDesign />
      </div>
      
      {/* Skills Section with generous spacing */}
      <div className="py-64 md:py-80 w-full">
        <Skills />
      </div>
      
      {/* Contact Section with generous spacing */}
      <div className="py-64 md:py-80 w-full">
        <Contact />
      </div>
      
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
}