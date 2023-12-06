import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

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
  let source = '';
  let sourceReadError: JSX.Element | undefined;

  try {
    source = await getProjectReadme(project);
  } catch (error: unknown) {
    if (error instanceof Error) {
      sourceReadError = <p>{error.message}</p>;
    }
  }

  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <Section ariaLabel="project more info" className="prose">
      {sourceReadError || content}
    </Section>
  );
}
