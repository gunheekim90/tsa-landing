import { SiteNav } from './components/SiteNav';
import { LightHero } from './components/LightHero';
import { StatsBand } from './components/StatsBand';
import { OfferingsSection } from './components/sections/OfferingsSection';
import { JourneySection } from './components/sections/JourneySection';
import { WorkSection } from './components/sections/WorkSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { EducationSection } from './components/sections/EducationSection';
import { StudioServicesSection } from './components/sections/StudioServicesSection';
import { ContactFormSection } from './components/sections/ContactFormSection';
import { SiteFooter } from './components/SiteFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--lt-bg)] font-dc-body text-[color:var(--lt-ink)] antialiased">
      <SiteNav />
      <main>
        <LightHero />
        <StatsBand />
        <StudioServicesSection />
        <OfferingsSection />
        <WorkSection />
        <JourneySection />
        <SolutionsSection />
        <EducationSection />
        <ContactFormSection />
      </main>
      <SiteFooter />
    </div>
  );
}
