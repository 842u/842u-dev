import { CypressIcon } from '@/components/decorative/icons/CypressIcon';
import { DockerIcon } from '@/components/decorative/icons/DockerIcon';
import { ESlintIcon } from '@/components/decorative/icons/ESlintIcon';
import { FigmaIcon } from '@/components/decorative/icons/FigmaIcon';
import { GitHubIcon } from '@/components/decorative/icons/GitHubIcon';
import { GitIcon } from '@/components/decorative/icons/GitIcon';
import { GraphQLIcon } from '@/components/decorative/icons/GraphQLIcon';
import { JavaScriptIcon } from '@/components/decorative/icons/JavaScriptIcon';
import { JestIcon } from '@/components/decorative/icons/JestIcon';
import { JiraIcon } from '@/components/decorative/icons/Jira';
import { NextJSIcon } from '@/components/decorative/icons/NextJSIcon';
import { RaspberryPiIcon } from '@/components/decorative/icons/RaspberryPiIcon';
import { ReactIcon } from '@/components/decorative/icons/ReactIcon';
import { SanityIcon } from '@/components/decorative/icons/SanityIcon';
import { SassIcon } from '@/components/decorative/icons/SassIcon';
import { SendGridIcon } from '@/components/decorative/icons/SendGridIcon';
import { TailwindCSSIcon } from '@/components/decorative/icons/TailwindCSSIcon';
import { SpecificToolIconProps } from '@/components/decorative/icons/ToolIcon';
import { TypeScriptIcon } from '@/components/decorative/icons/TypeScriptIcon';
import { VercelIcon } from '@/components/decorative/icons/VercelIcon';
import { AvailableTools } from '@/types';

export const toolIconMapping: Record<
  AvailableTools,
  React.FC<SpecificToolIconProps>
> = {
  [AvailableTools.Cypress]: CypressIcon,
  [AvailableTools.ESLint]: ESlintIcon,
  [AvailableTools.Figma]: FigmaIcon,
  [AvailableTools.Git]: GitIcon,
  [AvailableTools.GitHub]: GitHubIcon,
  [AvailableTools.GraphQL]: GraphQLIcon,
  [AvailableTools.JavaScript]: JavaScriptIcon,
  [AvailableTools.Jest]: JestIcon,
  [AvailableTools.Jira]: JiraIcon,
  [AvailableTools.NextJS]: NextJSIcon,
  [AvailableTools.React]: ReactIcon,
  [AvailableTools.Sanity]: SanityIcon,
  [AvailableTools.Sass]: SassIcon,
  [AvailableTools.SendGrid]: SendGridIcon,
  [AvailableTools.TailwindCSS]: TailwindCSSIcon,
  [AvailableTools.TypeScript]: TypeScriptIcon,
  [AvailableTools.Vercel]: VercelIcon,
  [AvailableTools.Docker]: DockerIcon,
  [AvailableTools.RaspberryPi]: RaspberryPiIcon,
};
