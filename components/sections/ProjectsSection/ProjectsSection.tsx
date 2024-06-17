'use client';

import { useRef } from 'react';

import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { useInfiniteMenu } from '@/hooks/useInfiniteMenu';
import { Project } from '@/types';
import { defaultMediaBreakpoints } from '@/utils/defaults';

import { Section } from '../Section';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const menuElementRef = useRef<HTMLMenuElement>(null);

  const { activeElementIndex } = useInfiniteMenu(
    menuElementRef,
    defaultMediaBreakpoints,
  );

  return (
    <Section ariaLabel="projects overview" title="Projects">
      <HorizontalMenu ref={menuElementRef} className="my-10" items={projects} />

      <div aria-hidden className="hidden">
        {/* hidden links for site crawlers */}
        {projects.map((project) => (
          <a key={project.slug} href={`/projects/${project.slug}`}>
            {project.name}
          </a>
        ))}
      </div>

      <ProjectCard project={projects[activeElementIndex]} />
    </Section>
  );
}
