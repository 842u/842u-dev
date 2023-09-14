import { AvaliableTools, Project } from '@/types';

export const mockProjects: Project[] = [
  {
    name: 'mock project 1',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvaliableTools.Cypress, AvaliableTools.Git],
    slug: 'mock-project-1',
  },
  {
    name: 'mock project 2',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [AvaliableTools.Cypress, AvaliableTools.Git],
    slug: 'mock-project-2',
  },
];
