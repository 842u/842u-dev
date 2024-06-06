import BazuDevSVG from '@/components/decorative/CMR2SVG/BazuDevSVG';
import { AvaliableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData[] = [
  {
    name: 'mock project 1',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvaliableTools.Cypress, AvaliableTools.Git],
    CMR2SVG: <BazuDevSVG />,
  },
  {
    name: 'mock project 2',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvaliableTools.GraphQL, AvaliableTools.GitHub],
    CMR2SVG: <BazuDevSVG />,
  },
];

export const mockProjects = data.map((projectData) =>
  createProject(projectData),
);
