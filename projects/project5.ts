import { AvaliableTools, ProjectSettings } from '@/types';
import { createProject } from '@/utils/createProject';

const projectSettings: ProjectSettings = {
  name: 'Project 5',
  image: '/placeholder-image.jpg',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis, vel aspernatur deleniti ipsam tempore molestias impedit aliquid obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste cumque aliquid quaerat, non harum natus dolor omnis. Architecto obcaecati debitis accusamus labore, magni optio aliquid, itaque officiis sed delectus ipsum. Pariatur, mollitia.`,
  tools: [
    AvaliableTools.JavaScript,
    AvaliableTools.NextJS,
    AvaliableTools.GraphQL,
    AvaliableTools.ESLint,
    AvaliableTools.GitHub,
  ],
};

export const project5 = createProject(projectSettings);
