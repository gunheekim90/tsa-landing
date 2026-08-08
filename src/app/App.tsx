import { SiteNav } from './components/SiteNav';
import { AxHero } from './components/AxHero';
import { AxDxSection } from './components/sections/AxDxSection';
import { WorkSection } from './components/sections/WorkSection';
import { StudioServicesSection } from './components/sections/StudioServicesSection';
import { ContactFormSection } from './components/sections/ContactFormSection';
import { SiteFooter } from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--dc-bg)] font-dc-body text-[color:var(--dc-ink)] antialiased">
      <SiteNav />
      <main>
        <AxHero />
        <AxDxSection />
        <WorkSection />
        <StudioServicesSection />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </div>
  );
}
