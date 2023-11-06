export enum AvaliableTools {
  TailwindCSS = 'TailwindCSS',
  NextJS = 'NextJS',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  Git = 'Git',
  GitHub = 'GitHub',
  React = 'React',
  Jest = 'Jest',
  Sass = 'Sass',
  Jira = 'Jira',
  Figma = 'Figma',
  ESLint = 'ESLint',
  Cypress = 'Cypress',
  GraphQL = 'GraphQL',
  Sanity = 'Sanity',
  Vercel = 'Vercel',
  SendGrid = 'SendGrid',
}

export type Tool = {
  name: AvaliableTools;
};

export type Project = {
  name: string;
  image: string;
  description: string;
  slug: string;
  tools: AvaliableTools[];
};

export type ProjectSettings = {
  name: string;
  image: string;
  description: string;
  tools: AvaliableTools[];
};

export type ItemOffset = number | 'center';

type Breakpoint = {
  minWidth: number;
  offset: ItemOffset;
};

export type MediaBreakpoints = {
  sm: Breakpoint;
  md: Breakpoint;
  lg: Breakpoint;
};
