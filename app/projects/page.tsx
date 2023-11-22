'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import { Section } from '@/components/sections/Section';
import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { allProjects } from '@/data/projects/allProjects';
import { Project } from '@/types';

const BazuDevSVG = dynamic(
  () => import('@/components/decorative/CMR2SVG/BazuDevSVG'),
);

type AllProjectsSectionProps = {
  projects: Project[];
};

function AllProjectsSection({ projects }: AllProjectsSectionProps) {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const menuItemClickHandler = (event: React.MouseEvent) => {
    const clickedProject = projects.find(
      (project) =>
        project.name.toLowerCase() ===
        (event.target as HTMLButtonElement).innerText,
    );

    setCurrentProject(clickedProject || projects[0]);
  };

  return (
    <div className="min-h-screen">
      <Section ariaLabel="all projects" title="Projects">
        <BazuDevSVG />

        <HorizontalMenu className="my-10" onClick={menuItemClickHandler}>
          {projects.map((project) => project.name)}
        </HorizontalMenu>
      </Section>
      <Section>
        <ProjectCard project={currentProject} />
      </Section>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <AllProjectsSection projects={allProjects} />
    </main>
  );
}
