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
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="my-8">
        <div className="relative my-8 aspect-square w-full">
          <Image
            fill
            alt={`${project.name} overview image`}
            className="object-cover"
            src={project.image}
          />
        </div>

        <h3 className="my-2 text-xl">{project.name}</h3>

        <p>{project.description}</p>
      </div>

      <div className="my-8">
        <h3 className="my-2 text-xl">Built with:</h3>

        <div className="flex flex-wrap justify-evenly gap-8">
          {project.tools.map((tool) => (
            <div key={tool.name} className="relative aspect-square w-14">
              <Image fill alt={`${tool.name}`} src={tool.icon} />
            </div>
          ))}
        </div>

        <LinkButton href="/projects">See more...</LinkButton>
      </div>
    </>
  );
}
