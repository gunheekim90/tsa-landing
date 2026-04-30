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
  const researchRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<HTMLDivElement>(null);
  const deploymentsRef = useRef<HTMLDivElement>(null);
  const researchersRef = useRef<HTMLDivElement>(null);
  const notesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useTrackSectionView(researchRef, 'research');
  useTrackSectionView(modelsRef, 'models');
  useTrackSectionView(deploymentsRef, 'deployments');
  useTrackSectionView(researchersRef, 'researchers');
  useTrackSectionView(notesRef, 'notes');
  useTrackSectionView(contactRef, 'contact');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-grain bg-[color:var(--ink-base)] text-[color:var(--paper)]">
      <Navigation scrollY={scrollY} />
      <main>
        <Hero />
        <div ref={researchRef}><About /></div>
        <div ref={modelsRef}><Services /></div>
        <div ref={deploymentsRef}><Portfolio /></div>
        <div ref={researchersRef}><Team /></div>
        <div ref={notesRef}><FAQ /></div>
      </main>
      <div ref={contactRef}><Footer /></div>
    </div>
  );
}