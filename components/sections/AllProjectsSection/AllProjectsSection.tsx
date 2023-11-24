'use client';

import { useState } from 'react';

import BazuDevSVG from '@/components/decorative/CMR2SVG/BazuDevSVG';
import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { Project } from '@/types';

import { Section } from '../Section';

type AllProjectsSectionProps = {
  projects: Project[];
};

export function AllProjectsSection({ projects }: AllProjectsSectionProps) {
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
      <Section
        ariaLabel="all projects"
        className="my-0 flex min-h-screen flex-col justify-between md:my-0 lg:my-0"
      >
        <h1 className="mt-24 text-right text-4xl md:text-5xl">Projects</h1>
        <BazuDevSVG />

        <HorizontalMenu className="my-10" onClick={menuItemClickHandler}>
          {projects.map((project) => project.name.toLowerCase())}
        </HorizontalMenu>
      </Section>

      <Section className="mt-0 md:mt-0 lg:mt-0">
        <ProjectCard headingTag="h2" project={currentProject} />
      </Section>
    </div>
  );
}
