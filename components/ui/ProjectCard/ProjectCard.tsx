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
    <div>
      <div className="border-2 border-success">
        <h3>{project.name}</h3>

        <div className="relative aspect-square w-full">
          <Image
            fill
            alt={`${project.name} overview image`}
            className="object-cover"
            src={project.image}
          />
        </div>

        <p>{project.description}</p>
      </div>

      <div className="border-2 border-success">
        <h3>TOOLS</h3>

        <div className="flex flex-wrap justify-evenly gap-8">
          {project.tools.map((tool) => (
            <div className="relative aspect-square w-14">
              <Image fill alt={`${tool.name}`} src={tool.icon} />
            </div>
          ))}
        </div>

        <LinkButton href="/projects">See more...</LinkButton>
      </div>
    </div>
  );
}
