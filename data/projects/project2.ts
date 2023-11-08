import { AvaliableTools, ProjectSettings } from '@/types';
import { createProject } from '@/utils/helpers';

const projectSettings: ProjectSettings = {
  name: 'Project 2',
  image: '/placeholder-image.jpg',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis, vel aspernatur deleniti ipsam tempore molestias impedit aliquid obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste cumque aliquid quaerat, non harum natus dolor omnis.`,
  tools: [
    AvaliableTools.TypeScript,
    AvaliableTools.React,
    AvaliableTools.ESLint,
  ],
};

export const project2 = createProject(projectSettings);
