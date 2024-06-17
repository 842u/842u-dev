'use client';

import Link from 'next/link';
import { useRef } from 'react';

import { HorizontalMenu } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { useInfiniteMenu } from '@/hooks/useInfiniteMenu';
import { useTouchSwipe } from '@/hooks/useTouchSwipe';
import { Project } from '@/types';
import { defaultMediaBreakpoints } from '@/utils/defaults';

import { Section } from '../Section';

type AllProjectsSectionProps = {
  projects: Project[];
};

export function AllProjectsSection({ projects }: AllProjectsSectionProps) {
  const menuElement = useRef<HTMLMenuElement>(null);
  const logoElement = useRef<HTMLDivElement>(null);

  const { activeElementIndex, activeNextItem, activePreviousItem } =
    useInfiniteMenu(menuElement, defaultMediaBreakpoints);

  const swipeRightHandler = () => {
    activePreviousItem();
  };

  const swipeLeftHandler = () => {
    activeNextItem();
  };

  useTouchSwipe(menuElement, 50, swipeLeftHandler, swipeRightHandler);

  useTouchSwipe(logoElement, 50, swipeLeftHandler, swipeRightHandler);

  return (
    <div>
      <Section
        ariaLabel="all projects"
        className="my-0 flex min-h-screen flex-col md:my-0 lg:my-0"
      >
        <div className="flex h-screen max-h-screen flex-col justify-between">
          <h1 className="mt-24 text-right text-4xl md:text-5xl">Projects</h1>
          <div
            ref={logoElement}
            className="flex flex-grow flex-col items-center"
          >
            <Link
              aria-label={projects[activeElementIndex].name}
              className="h-full fill-dark-lighter transition-all hover:scale-105 hover:fill-dark dark:fill-light-darker dark:hover:fill-light"
              href={`/projects/${projects[activeElementIndex].slug}`}
            >
              {projects[activeElementIndex].CMR2SVG}
            </Link>
          </div>
          <HorizontalMenu
            ref={menuElement}
            className="my-10"
            items={projects}
          />
        </div>
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
        <ProjectCard headingTag="h2" project={projects[activeElementIndex]} />
      </Section>
    </div>
  );
}
