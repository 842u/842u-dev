import { CmrSVG } from '@/components/decorative/CmrSVG';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { allProjects } from '@/projects/allProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={allProjects} />
      <CmrSVG duration={5} rotate={0} text="Kamil Bażanow Kamil Bażanow" />
    </main>
  );
}
