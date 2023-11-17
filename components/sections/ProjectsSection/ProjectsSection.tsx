'use client';

import { useState } from 'react';

import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { Project } from '@/types';

import { Section } from '../Section';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
    <Section ariaLabel="projects overview" title="Projects">
      <HorizontalMenu className="my-10" onClick={menuItemClickHandler}>
        {projects.map((project) => project.name.toLowerCase())}
      </HorizontalMenu>

      <ProjectCard project={currentProject} />
    </Section>
  );
}
