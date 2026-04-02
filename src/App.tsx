import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JourneyFocus from './components/JourneyFocus';
import VisualBreak from './components/VisualBreak';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import VisualBreakTwo from './components/VisualBreakTwo';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import WorldClock from './components/WorldClock';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <JourneyFocus />
        <VisualBreak />
        <Expertise />
        <Experience />
        <VisualBreakTwo />
        <Portfolio />
        <Contact />
      </main>
      <WorldClock />
      <Footer />
    </div>
  );
}
