import { CypressIcon } from '@/components/icons/CypressIcon';
import { ESlintIcon } from '@/components/icons/ESlintIcon';
import { FigmaIcon } from '@/components/icons/FigmaIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { GitIcon } from '@/components/icons/GitIcon';
import { GraphQLIcon } from '@/components/icons/GraphQLIcon';
import { JavaScriptIcon } from '@/components/icons/JavaScriptIcon';
import { JestIcon } from '@/components/icons/JestIcon';
import { JiraIcon } from '@/components/icons/Jira';
import { NextJSIcon } from '@/components/icons/NextJSIcon';
import { ReactIcon } from '@/components/icons/ReactIcon';
import { SanityIcon } from '@/components/icons/SanityIcon';
import { SassIcon } from '@/components/icons/SassIcon';
import { SendGridIcon } from '@/components/icons/SendGridIcon';
import { TailwindCSSIcon } from '@/components/icons/TailwindCSSIcon';
import { SpecificToolIconProps } from '@/components/icons/ToolIcon';
import { TypeScriptIcon } from '@/components/icons/TypeScriptIcon';
import { VercelIcon } from '@/components/icons/VercelIcon';
import { AvaliableTools } from '@/types';

export const toolIconMapping: Record<
  AvaliableTools,
  React.FC<SpecificToolIconProps>
> = {
  [AvaliableTools.Cypress]: CypressIcon,
  [AvaliableTools.ESLint]: ESlintIcon,
  [AvaliableTools.Figma]: FigmaIcon,
  [AvaliableTools.Git]: GitIcon,
  [AvaliableTools.GitHub]: GitHubIcon,
  [AvaliableTools.GraphQL]: GraphQLIcon,
  [AvaliableTools.JavaScript]: JavaScriptIcon,
  [AvaliableTools.Jest]: JestIcon,
  [AvaliableTools.Jira]: JiraIcon,
  [AvaliableTools.NextJS]: NextJSIcon,
  [AvaliableTools.React]: ReactIcon,
  [AvaliableTools.Sanity]: SanityIcon,
  [AvaliableTools.Sass]: SassIcon,
  [AvaliableTools.SendGrid]: SendGridIcon,
  [AvaliableTools.TailwindCSS]: TailwindCSSIcon,
  [AvaliableTools.TypeScript]: TypeScriptIcon,
  [AvaliableTools.Vercel]: VercelIcon,
};
