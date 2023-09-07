import { Project } from '@/types';

export const mockProjects: Project[] = [
  {
    name: 'mock project 1',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [
      {
        name: 'mock tool 1',
        icon: '/mockIcon.svg',
      },
      {
        name: 'mock tool 2',
        icon: '/mockIcon.svg',
      },
    ],
    slug: 'mock-project-1',
  },
  {
    name: 'mock project 2',
    image: '/mockImage.svg',
    description: 'mock description',
    tools: [
      {
        name: 'mock tool 1',
        icon: '/mockIcon.svg',
      },
      {
        name: 'mock tool 2',
        icon: '/mockIcon.svg',
      },
    ],
    slug: 'mock-project-2',
  },
];
