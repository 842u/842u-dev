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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const menuItemClickHandler = (event: React.MouseEvent) => {
    const clickedProjectIndex = projects.findIndex(
      (project) =>
        project.name.toLowerCase() ===
        (event.target as HTMLButtonElement).innerText,
    );

    setCurrentProjectIndex(clickedProjectIndex);
  };

  const menuSwipeLeftHandler = () => {
    if (currentProjectIndex + 1 >= projects.length) {
      setCurrentProjectIndex(0);
    } else {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
  };
  const menuSwipeRightHandler = () => {
    if (currentProjectIndex - 1 < 0) {
      setCurrentProjectIndex(projects.length - 1);
    } else {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
  };

  return (
    <Section ariaLabel="projects overview" title="Projects">
      <HorizontalMenu
        className="my-10"
        onClick={menuItemClickHandler}
        onLeftSwipe={menuSwipeLeftHandler}
        onRightSwipe={menuSwipeRightHandler}
      >
        {projects.map((project) => project.name.toLowerCase())}
      </HorizontalMenu>

      <ProjectCard project={projects[currentProjectIndex]} />
    </Section>
  );
}
