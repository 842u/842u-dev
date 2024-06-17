'use client';

import { useRef } from 'react';

import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { useInfiniteMenu } from '@/hooks/useInfiniteMenu';
import { useTouchSwipe } from '@/hooks/useTouchSwipe';
import { Project } from '@/types';
import { defaultMediaBreakpoints } from '@/utils/defaults';

import { Section } from '../Section';

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const menuElement = useRef<HTMLMenuElement>(null);

  const { activeElementIndex, activeNextItem, activePreviousItem } =
    useInfiniteMenu(menuElement, defaultMediaBreakpoints);

  useTouchSwipe(menuElement, 50, activeNextItem, activePreviousItem);

  return (
    <Section ariaLabel="projects overview" title="Projects">
      <HorizontalMenu ref={menuElement} className="my-10" items={projects} />

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
