import NoiseBackground from '@/components/ui/NoiseBackground';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import SectionReveal from '@/components/animations/SectionReveal';

export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#050816'}}>
      <NoiseBackground />
      <Navbar />
      <Hero />
      <SectionReveal delay={0}><Services /></SectionReveal>
      <SectionReveal delay={0}><Process /></SectionReveal>
      <SectionReveal delay={0}><TechStack /></SectionReveal>
      <SectionReveal delay={0}><About /></SectionReveal>
      <SectionReveal delay={0}><Contact /></SectionReveal>
      <SectionReveal delay={0}><Footer /></SectionReveal>
    </main>
  );
}
