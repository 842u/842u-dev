import { AllProjectsSection } from '@/components/sections/AllProjectsSection/AllProjectsSection';
import { allProjects } from '@/data/projects/allProjects';

export default function ProjectsPage() {
  return (
    <main>
      <AllProjectsSection projects={allProjects} />
    </main>
  );
}
