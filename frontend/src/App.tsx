import { HeroSection } from './components/portfolio/sections/HeroSection';
import { AboutSection } from './components/portfolio/sections/AboutSection';
import { SkillsSection } from './components/portfolio/sections/SkillsSection';
import { ProjectsSection } from './components/portfolio/sections/ProjectsSection';
import { ExperienceSection } from './components/portfolio/sections/ExperienceSection';
import { ContactSection } from './components/portfolio/sections/ContactSection';
import { SiteHeader } from './components/portfolio/SiteHeader';
import { SiteFooter } from './components/portfolio/SiteFooter';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
