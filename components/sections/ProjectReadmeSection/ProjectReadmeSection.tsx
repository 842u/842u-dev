import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { Project } from '@/types';

import { Section } from '../Section';

async function getProjectReadme(project: Project) {
  try {
    if (project.localReadme?.trim()) {
      const markdown = fs.readFileSync(project.localReadme, 'utf-8');
      return markdown;
    }

    if (project.remoteReadme?.trim() && !project.localReadme?.trim()) {
      const response = await fetch(project.remoteReadme);
      const markdown = await response.text();
      return markdown;
    }
  } catch (error: unknown) {
    throw new Error('Something went wrong. Cannot get project README.');
  }

  return '';
}

type ProjectReadmeSectionProps = {
  project: Project;
};

export async function ProjectReadmeSection({
  project,
}: ProjectReadmeSectionProps) {
  let readme = '';
  let readmeError: JSX.Element | undefined;

  try {
    readme = await getProjectReadme(project);
  } catch (error: unknown) {
    if (error instanceof Error) {
      readmeError = <p>{error.message}</p>;
    }
  }
  return (
    <Section ariaLabel="project more info">
      {readmeError || <MDXRemote source={readme} />}
    </Section>
  );
}
