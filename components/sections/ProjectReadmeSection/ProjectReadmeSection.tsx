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
    <Section ariaLabel="project more info">
      <article className="prose md:prose-lg lg:prose prose-headings:text-dark dark:prose-headings:text-light prose-a:text-dark dark:prose-a:text-light prose-thead:border-dark dark:prose-thead:border-light prose-tr:border-dark-lighter dark:prose-tr:border-light-darker lg:max-w max-w-full overflow-hidden text-dark-lighter dark:text-light-darker">
        {sourceReadError || content}
      </article>
    </Section>
  );
}
