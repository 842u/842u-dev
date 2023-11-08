import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { ExperienceSection } from '@/components/sections/TechSection/ExperienceSection';
import { allProjects } from '@/data/projects/allProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={allProjects} />
      <ExperienceSection />
    </main>
  );
}
