'use client';

import { useState } from 'react';

import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { Project } from '@/types';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const menuItemClickHandler = (event: React.SyntheticEvent<EventTarget>) => {
    const clickedProject = projects.find(
      (project) =>
        project.name === (event.target as HTMLButtonElement).innerText,
    );

    setCurrentProject(clickedProject || projects[0]);
  };

  return (
    <section
      aria-label="projects overview"
      className="min-h-screen px-4 md:px-16 lg:px-36"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="self-end text-4xl md:text-5xl">projects</h2>

        <HorizontalMenu
          currentItem={currentProject.name}
          onClickItem={menuItemClickHandler}
        >
          {projects.map((project) => project.name)}
        </HorizontalMenu>
      </div>

      <ProjectCard project={currentProject} />
    </section>
  );
}
