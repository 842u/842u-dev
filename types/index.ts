import { StaticImageData } from 'next/image';

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

export type Course = {
  name: string;
  image: StaticImageData;
  url: string;
  date: Date;
  hoursLength: number;
};

export type ProjectData = {
  name: string;
  image: string;
  description: string;
  tools: AvaliableTools[];
  CMR2SVG: JSX.Element;
  repository?: string;
  remoteReadme?: string;
};

export type Project = ProjectData & {
  slug: string;
  localReadme?: string;
};

export type ItemOffset = number | 'center';

export enum AvaliableBreakpoints {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export type Breakpoint = {
  id: AvaliableBreakpoints;
  minWidth: number;
  offset: ItemOffset;
};

export type MediaBreakpoints = {
  [value in keyof typeof AvaliableBreakpoints]: Breakpoint;
};

export enum FormInputsIdentifiers {
  Name = 'name',
  Email = 'email',
  Message = 'message',
}

export type ContactFormValues = {
  [FormInputsIdentifiers.Name]: string;
  [FormInputsIdentifiers.Email]: string;
  [FormInputsIdentifiers.Message]: string;
};

export type ValidationRules = Partial<{
  required: string | boolean | undefined;
  minLength: {
    value: number;
    message: string;
  };
  maxLength: {
    value: number;
    message: string;
  };
  pattern: {
    value: RegExp;
    message: string;
  };
}>;

export type SvgPathData = {
  viewBox: string;
  path: string;
  pathId: string;
};
