import BazuDevSVG from '@/components/decorative/CMR2SVG/BazuDevSVG';
import { AvaliableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData = {
  name: '842u.dev',
  image: '/placeholder-image.jpg',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit Perferendis, vel aspernatur deleniti ipsam tempore molestias impedit aliquid obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste cumque aliquid quaerat, non harum natus dolor omnis.`,
  tools: [
    AvaliableTools.TypeScript,
    AvaliableTools.React,
    AvaliableTools.ESLint,
  ],
  CMR2SVG: <BazuDevSVG />,
  remoteReadme:
    'https://raw.githubusercontent.com/842u/842u-dev/main/README.md',
  repository: 'https://github.com/842u/842u-dev',
};

export const project2 = createProject(data);
