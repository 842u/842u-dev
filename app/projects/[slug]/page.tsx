import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ProjectReadmeSection } from '@/components/sections/ProjectReadmeSection/ProjectReadmeSection';
import { Section } from '@/components/sections/Section';
import { ProjectCard } from '@/components/ui/ProjectCard/ProjectCard';
import { allProjects } from '@/data/projects/allProjects';

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = allProjects.find(
    (specificProject) => specificProject.slug === params.slug,
  );

  return {
    title: `842u | ${project?.name}`,
    description: `Explore details of ${project?.name} project. ${project?.description}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = allProjects.find(
    (specificProject) => specificProject.slug === params.slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Section ariaLabel="project brief overview" className="mt-20">
        <ProjectCard
          imgPriority
          withRepoLink
          headingTag="h1"
          project={project}
        />
      </Section>
      <ProjectReadmeSection project={project} />
    </main>
  );
}
