import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { TechSection } from '@/components/sections/TechSection/TechSection';
import { allProjects } from '@/data/projects/allProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={allProjects} />
      <TechSection />
    </main>
  );
}
