import Image from 'next/image';

import { Project } from '@/types';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { SectionParagraph } from '../../sections/SectionParagraph';
import { LinkButton } from '../LinkButton';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="gap-10 lg:flex lg:justify-between"
      data-testid="project-card"
    >
      <div className="lg:flex lg:w-1/2 lg:min-w-[50%] lg:flex-col">
        <div className="relative aspect-square w-full lg:aspect-video">
          <Image
            fill
            alt={`${project.name} overview image`}
            className="object-cover"
            src={project.image}
          />
        </div>

        <h3 className="my-8 text-2xl md:text-3xl">{project.name}</h3>

        <SectionParagraph className="my-0 md:my-0">
          {project.description}
        </SectionParagraph>
      </div>

      <div className="my-8 flex flex-col lg:my-0 lg:max-w-md lg:flex-grow">
        <h3 className="text-2xl md:text-3xl">Built with:</h3>

        <div className="my-8 flex flex-wrap justify-evenly gap-10 md:my-16 lg:gap-14">
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
