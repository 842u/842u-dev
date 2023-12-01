import { AvaliableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData[] = [
  {
    name: 'mock project 1',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvaliableTools.Cypress, AvaliableTools.Git],
  },
  {
    name: 'mock project 2',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvaliableTools.Cypress, AvaliableTools.Git],
  },
];

export const mockProjects = data.map((projectData) =>
  createProject(projectData),
);
