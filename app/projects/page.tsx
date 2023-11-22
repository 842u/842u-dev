'use client';

import { useState } from 'react';

import { CMR2SVG } from '@/components/decorative/CMR2SVG';
import { Section } from '@/components/sections/Section';
import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { allProjects } from '@/data/projects/allProjects';
import { bazuDevSVGPath } from '@/data/svgPaths';
import { Project } from '@/types';

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
        <CMR2SVG
          animationDuration={20}
          characterRotation="0"
          characterSpacing={0.1}
          className="fill-light-darker text-[10px] dark:text-dark-lighter md:block"
          pathShape={bazuDevSVGPath}
          text="842u.dev "
          textRepetition={23}
          viewBox="0 0 960 243"
        />
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
