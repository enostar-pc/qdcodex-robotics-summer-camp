import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import ProgramDetails from './components/ProgramDetails';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyBottomCTA from './components/StickyBottomCTA';
import RoboticsBackground from './components/RoboticsBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0814] text-white relative">
      <RoboticsBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Projects />
        <ProgramDetails />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
      <StickyBottomCTA />
    </div>
  );
}
