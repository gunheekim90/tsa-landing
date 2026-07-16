import { SiteNav } from './components/SiteNav';
import { StudioHero } from './components/StudioHero';
import { GeoSection } from './components/sections/GeoSection';
import { ToonSection } from './components/sections/ToonSection';
import { StudioSection } from './components/sections/StudioSection';
import { ContactSection } from './components/sections/ContactSection';
import { SiteFooter } from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--dc-bg)] font-dc-body text-[color:var(--dc-ink)] antialiased">
      <SiteNav />
      <main>
        <StudioHero />
        <GeoSection />
        <ToonSection />
        <StudioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
