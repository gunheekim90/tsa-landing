import { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { trackEvent } from '@/lib/gtag';

function useTrackSectionView(ref: React.RefObject<HTMLDivElement | null>, sectionName: string) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trackEvent('section_view', { section: sectionName });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, sectionName]);
}

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useTrackSectionView(aboutRef, 'about');
  useTrackSectionView(servicesRef, 'services');
  useTrackSectionView(portfolioRef, 'portfolio');
  useTrackSectionView(teamRef, 'team');
  useTrackSectionView(faqRef, 'faq');
  useTrackSectionView(contactRef, 'contact');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navigation scrollY={scrollY} />
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={portfolioRef}><Portfolio /></div>
      <div ref={teamRef}><Team /></div>
      <div ref={faqRef}><FAQ /></div>
      <div ref={contactRef}><Footer /></div>
    </div>
  );
}