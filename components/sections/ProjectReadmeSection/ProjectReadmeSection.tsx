import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { JSX } from 'react';
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
  } catch (_error: unknown) {
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
      <article className="prose text-dark-lighter md:prose-lg lg:prose-base prose-headings:text-dark prose-a:inline-block prose-a:text-dark prose-code:text-dark prose-pre:bg-light-darker prose-thead:border-dark prose-tr:border-dark-lighter prose-img:m-0 dark:text-light-darker dark:prose-headings:text-light dark:prose-a:text-light dark:prose-code:text-light dark:prose-pre:bg-dark-lighter dark:prose-thead:border-light dark:prose-tr:border-light-darker max-w-full overflow-hidden lg:max-w-2xl">
        {sourceReadError || content}
      </article>
    </Section>
  );
}
