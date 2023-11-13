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
