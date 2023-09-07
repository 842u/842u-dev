import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { allProjects } from '@/projects/allProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={allProjects} />
    </main>
  );
}
