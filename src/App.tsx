import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[var(--color-neu-bg)] min-h-screen text-[var(--color-neu-text)] font-sans relative overflow-hidden bg-grid">
      
      {/* Animated Floating Geometric Shapes for Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Yellow Circle */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-[var(--color-neu-yellow)] rounded-full neu-border-thick animate-float"></div>
        {/* Blue Square */}
        <div className="absolute top-[60%] right-[10%] w-24 h-24 bg-[var(--color-neu-blue)] neu-border-thick rotate-12 animate-float-delayed"></div>
        {/* Pink Triangle (using border hack or SVG, here let's just use a rotated rect) */}
        <div className="absolute top-[20%] right-[20%] w-16 h-16 bg-[var(--color-neu-pink)] rounded-lg neu-border-thick rotate-45 animate-float-fast"></div>
        {/* Green Pill */}
        <div className="absolute bottom-[10%] left-[15%] w-40 h-16 bg-[var(--color-neu-green)] rounded-full neu-border-thick -rotate-12 animate-float"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceEducation />
          <Certificates />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
