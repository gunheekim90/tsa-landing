import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation scrollY={scrollY} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}