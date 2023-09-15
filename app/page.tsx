import { CmrSVG } from '@/components/decorative/CmrSVG';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { allProjects } from '@/projects/allProjects';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={allProjects} />
      <section className="max-h-screen w-screen overflow-hidden">
        <CmrSVG duration={40} rotate="0" spacing={0.1} text="Kamil Bażanow" />
      </section>
    </main>
  );
}
