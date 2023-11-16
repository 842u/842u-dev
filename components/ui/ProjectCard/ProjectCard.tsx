import Image from 'next/image';

import { Project } from '@/types';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { LinkButton } from '../LinkButton';
import { SectionParagraph } from '../SectionParagraph';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="gap-10 lg:flex lg:justify-between"
      data-testid="project-card"
    >
      <div className="my-8 lg:flex lg:w-1/2 lg:min-w-[50%] lg:flex-col">
        <div className="relative my-8 aspect-square w-full lg:aspect-video">
          <Image
            fill
            alt={`${project.name} overview image`}
            className="object-cover"
            src={project.image}
          />
        </div>

        <h3 className="my-2 text-2xl md:text-3xl">{project.name}</h3>

        <SectionParagraph>{project.description}</SectionParagraph>
      </div>

      <div className="my-8 flex flex-col lg:max-w-md lg:flex-grow">
        <h3 className="my-2 text-2xl md:text-3xl">Built with:</h3>

        <div className="my-10 flex flex-wrap justify-evenly gap-10 md:my-16 lg:gap-14">
          {project.tools.map((tool) => {
            const ToolIcon = toolIconMapping[tool];
            return <ToolIcon key={tool} className="w-14 md:w-20 lg:w-14" />;
          })}
        </div>

        <LinkButton className="lg:w-full" href={`/projects/${project.slug}`}>
          See more
        </LinkButton>
      </div>
    </div>
  );
}
