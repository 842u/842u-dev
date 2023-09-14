import { AvaliableTools, ProjectSettings } from '@/types';
import { createProject } from '@/utils/createProject';

const mockProjectsSettings: ProjectSettings[] = [
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

export const mockProjects = mockProjectsSettings.map((projectSettings) =>
  createProject(projectSettings),
);
