import Image from 'next/image';

import { GitHubIcon } from '@/components/icons/GithubIcon';
import { GitIcon } from '@/components/icons/GitIcon';
import { JavaScriptIcon } from '@/components/icons/JavaScriptIcon';
import { NextJSIcon } from '@/components/icons/NextJSIcon';
import { TailwindCSSIcon } from '@/components/icons/TailwindCSSIcon';
import { TypeScriptIcon } from '@/components/icons/TypeScriptIcon';
import { Project } from '@/types';

import { LinkButton } from '../LinkButton';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="lg:flex lg:justify-between" data-testid="project-card">
      <div className="my-8 lg:flex lg:w-1/2 lg:flex-col">
        <div className="relative my-8 aspect-square w-full lg:aspect-video">
          <Image
            fill
            alt={`${project.name} overview image`}
            className="object-cover"
            src={project.image}
          />
        </div>

        <h3 className="my-2 text-2xl md:text-3xl">{project.name}</h3>

        <p className="text-lg md:text-2xl">{project.description}</p>
      </div>

      <div className="my-8 flex flex-col lg:max-w-lg">
        <h3 className="my-2 text-2xl md:text-3xl">Built with:</h3>

        <div className="flex flex-wrap justify-evenly gap-8">
          <TailwindCSSIcon />
          <NextJSIcon />
          <JavaScriptIcon />
          <TypeScriptIcon />
          <GitIcon />
          <GitHubIcon />
        </div>

        <LinkButton className="lg:w-full" href={`/projects/${project.slug}`}>
          See more...
        </LinkButton>
      </div>
    </div>
  );
}
