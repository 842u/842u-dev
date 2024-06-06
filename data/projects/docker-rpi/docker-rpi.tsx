import DockerRpiSVG from '@/components/decorative/CMR2SVG/DockerRpiSVG';
import { AvaliableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData = {
  name: 'docker rpi',
  image: '/placeholder-image.jpg',
  description: ``,
  tools: [
    AvaliableTools.TypeScript,
    AvaliableTools.React,
    AvaliableTools.NextJS,
    AvaliableTools.TailwindCSS,
    AvaliableTools.Git,
    AvaliableTools.GitHub,
  ],
  CMR2SVG: <DockerRpiSVG />,
  repository: 'https://github.com/842u/docker-nginx-rpi',
  remoteReadme:
    'https://raw.githubusercontent.com/842u/docker-nginx-rpi/main/README.md',
};

export const dockerRpi = createProject(data);
