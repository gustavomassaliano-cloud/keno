import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeviceStory from './components/Story/DeviceStory';
import Services from './components/Services';
import Projects from './components/Projects';
import TimelineStory from './components/Story/TimelineStory';
import StoryCTA from './components/Story/StoryCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TechParticles from './components/TechParticles';
import BackgroundAsteroids from './components/BackgroundAsteroids';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';

export default function App() {
  return (
    <div className="bg-[#F5F2EB] text-brand-navy selection:bg-brand-red/30 font-sans min-h-screen">
      <Preloader />
      <PageTransition />
      <BackgroundAsteroids />
      <TechParticles />
      <Navbar />
      <main>
        <Hero />
        <DeviceStory />
        <Services />
        <Projects />
        <TimelineStory />
        <StoryCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
