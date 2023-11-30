import { Section } from '@/components/sections/Section';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { allProjects } from '@/data/projects/allProjects';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find(
    (specificProject) => specificProject.slug === params.slug,
  );

  return (
    project && (
      <Section ariaLabel="project brief overview">
        <h1 className="my-8 mt-24 text-right text-4xl md:text-5xl">
          {project.name}
        </h1>
        <ProjectCard project={project} />
      </Section>
    )
  );
}
