import { Metadata } from 'next';

import { AllProjectsSection } from '@/components/sections/AllProjectsSection/AllProjectsSection';
import { allProjects } from '@/data/projects/allProjects';

export const metadata: Metadata = {
  title: '842u | All projects',
  description:
    'Explore my projects from categories like frontend development, web development, embedded programming, and more. Dive into innovative web applications, interactive user interfaces, and experimental embedded systems. Discover how I integrate creativity with technical expertise to deliver robust and engaging solutions.',
};

export default function ProjectsPage() {
  return (
    <main>
      <AllProjectsSection projects={allProjects} />
    </main>
  );
}
