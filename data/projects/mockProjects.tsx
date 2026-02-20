import BazuDevSVG from '@/components/decorative/CMR2SVG/BazuDevSVG';
import { AvailableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData[] = [
  {
    name: 'mock project 1',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvailableTools.Cypress, AvailableTools.Git],
    CMR2SVG: <BazuDevSVG />,
  },
  {
    name: 'mock project 2',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvailableTools.GraphQL, AvailableTools.GitHub],
    CMR2SVG: <BazuDevSVG />,
  },
];

export const mockProjects = data.map((projectData) =>
  createProject(projectData),
);
