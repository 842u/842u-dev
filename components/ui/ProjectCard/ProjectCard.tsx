import Image from 'next/image';

import { Project } from '@/types';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { SectionParagraph } from '../../sections/SectionParagraph';
import { Heading, HeadingTag } from '../Heading/Heading';
import { LinkButton } from '../LinkButton';

type ProjectCardProps = {
  project: Project;
  headingTag?: HeadingTag;
  withRepoLink?: boolean;
  imgPriority?: boolean;
};

export function ProjectCard({
  project,
  headingTag = 'h3',
  withRepoLink = false,
  imgPriority = false,
}: ProjectCardProps) {
  const { name, image, slug, description, tools, repository } = project;

  return (
    <div className="lg:flex lg:justify-evenly" data-testid="project-card">
      <div className="lg:flex lg:w-1/2 lg:min-w-[50%] lg:flex-col">
        <div className="relative aspect-square w-full lg:aspect-video">
          <Image
            fill
            alt={`${name} overview image`}
            className="object-cover"
            priority={imgPriority}
            src={image}
          />
        </div>

        <Heading className="my-8 text-2xl md:text-3xl" headingTag={headingTag}>
          {name}
        </Heading>

        <SectionParagraph className="my-0 md:my-0 lg:my-0">
          {description}
        </SectionParagraph>
      </div>

      <div className="my-8 flex flex-col lg:my-0 lg:max-w-md lg:flex-grow">
        <Heading className="text-2xl md:text-3xl" headingTag={headingTag}>
          Built with:
        </Heading>

        <div className="my-8 flex flex-wrap justify-evenly gap-10 md:my-16 lg:gap-14">
          {tools.map((tool) => {
            const ToolIcon = toolIconMapping[tool];
            return <ToolIcon key={tool} className="w-14 md:w-20 lg:w-14" />;
          })}
        </div>

        {withRepoLink && repository ? (
          <LinkButton className="lg:w-full" href={repository} target="_blank">
            Check repository
          </LinkButton>
        ) : (
          <LinkButton className="lg:w-full" href={`/projects/${slug}`}>
            Explore {project.name}
          </LinkButton>
        )}
      </div>
    </div>
  );
}
