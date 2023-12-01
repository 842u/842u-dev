import { AvaliableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData = {
  name: 'Project 1',
  image: '/placeholder-image.jpg',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis, vel aspernatur deleniti ipsam tempore molestias impedit aliquid obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste cumque aliquid quaerat, non harum natus dolor omnis. Architecto obcaecati debitis accusamus labore, magni optio aliquid, itaque officiis sed delectus ipsum. Pariatur, mollitia.`,
  tools: [
    AvaliableTools.JavaScript,
    AvaliableTools.NextJS,
    AvaliableTools.GraphQL,
    AvaliableTools.ESLint,
    AvaliableTools.GitHub,
    AvaliableTools.Jest,
    AvaliableTools.Sanity,
    AvaliableTools.Git,
  ],
};

export const project1 = createProject(
  data,
  './data/projects/project-1/README.mdx',
);
