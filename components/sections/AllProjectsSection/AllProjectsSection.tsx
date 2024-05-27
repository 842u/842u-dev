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
    <div className="min-h-screen">
      <Section
        ariaLabel="all projects"
        className="my-0 flex min-h-screen flex-col justify-between md:my-0 lg:my-0"
      >
        <h1 className="mt-24 text-right text-4xl md:text-5xl">Projects</h1>
        <BazuDevSVG />

        <HorizontalMenu
          className="my-10"
          onClick={menuItemClickHandler}
          onLeftSwipe={menuSwipeLeftHandler}
          onRightSwipe={menuSwipeRightHandler}
        >
          {projects.map((project) => project.name.toLowerCase())}
        </HorizontalMenu>
        <div aria-hidden className="hidden">
          {/* hidden links for site crawlers */}
          {projects.map((project) => (
            <a key={project.slug} href={`/projects/${project.slug}`}>
              {project.name}
            </a>
          ))}
        </div>
      </Section>

      <Section className="mt-0 md:mt-0 lg:mt-0">
        <ProjectCard headingTag="h2" project={projects[currentProjectIndex]} />
      </Section>
    </div>
  );
}
