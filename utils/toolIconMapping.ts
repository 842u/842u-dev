import { CypressIcon } from '@/components/decorative/icons/CypressIcon';
import { ESlintIcon } from '@/components/decorative/icons/ESlintIcon';
import { FigmaIcon } from '@/components/decorative/icons/FigmaIcon';
import { GitHubIcon } from '@/components/decorative/icons/GitHubIcon';
import { GitIcon } from '@/components/decorative/icons/GitIcon';
import { GraphQLIcon } from '@/components/decorative/icons/GraphQLIcon';
import { JavaScriptIcon } from '@/components/decorative/icons/JavaScriptIcon';
import { JestIcon } from '@/components/decorative/icons/JestIcon';
import { JiraIcon } from '@/components/decorative/icons/Jira';
import { NextJSIcon } from '@/components/decorative/icons/NextJSIcon';
import { ReactIcon } from '@/components/decorative/icons/ReactIcon';
import { SanityIcon } from '@/components/decorative/icons/SanityIcon';
import { SassIcon } from '@/components/decorative/icons/SassIcon';
import { SendGridIcon } from '@/components/decorative/icons/SendGridIcon';
import { TailwindCSSIcon } from '@/components/decorative/icons/TailwindCSSIcon';
import { SpecificToolIconProps } from '@/components/decorative/icons/ToolIcon';
import { TypeScriptIcon } from '@/components/decorative/icons/TypeScriptIcon';
import { VercelIcon } from '@/components/decorative/icons/VercelIcon';
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
