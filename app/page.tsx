import { ContactSection } from '@/components/sections/ContactSection/ContactSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { allProjects } from '@/data/projects/allProjects';
import { mySkills } from '@/data/skills';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExperienceSection skills={mySkills} />
      <ProjectsSection projects={allProjects} />
      <ContactSection />
    </main>
  );
}
