import { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Products } from './components/Products';
import { Numbers } from './components/Numbers';
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
  const manifestoRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useTrackSectionView(manifestoRef, 'manifesto');
  useTrackSectionView(productsRef, 'products');
  useTrackSectionView(numbersRef, 'numbers');
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
        <div ref={manifestoRef}><Manifesto /></div>
        <div ref={productsRef}><Products /></div>
        <div ref={numbersRef}><Numbers /></div>
      </main>
      <div ref={contactRef}><Footer /></div>
    </div>
  );
}
