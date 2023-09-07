import Image from 'next/image';

import { LinkButton } from '../LinkButton';

type Tool = {
  name: string;
  icon: string;
};

export type Project = {
  name: string;
  image: string;
  description: string;
  tools: Tool[];
  slug: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="lg:flex lg:justify-between">
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
          {project.tools.map((tool) => (
            <div
              key={tool.name}
              className="relative aspect-square w-20 md:w-32"
            >
              <Image fill alt={`${tool.name} icon`} src={tool.icon} />
            </div>
          ))}
        </div>

        <LinkButton className="lg:w-full" href={`/projects/${project.slug}`}>
          See more...
        </LinkButton>
      </div>
    </div>
  );
}
