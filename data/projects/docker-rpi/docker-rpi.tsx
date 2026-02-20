import DockerRpiSVG from '@/components/decorative/CMR2SVG/DockerRpiSVG';
import { AvailableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData = {
  name: 'Docker RPi',
  image: '/placeholder-image.jpg',
  description: `This project was built to gain a basic understanding of Docker, NGINX, and the development and deployment processes on private remote machines. It demonstrates basics of Docker images and containers usage and how they can be integrated with CI/CD pipeline.`,
  tools: [
    AvailableTools.Docker,
    AvailableTools.RaspberryPi,
    AvailableTools.TypeScript,
    AvailableTools.React,
    AvailableTools.NextJS,
    AvailableTools.TailwindCSS,
    AvailableTools.Git,
    AvailableTools.GitHub,
  ],
  CMR2SVG: <DockerRpiSVG />,
  repository: 'https://github.com/842u/docker-nginx-rpi',
  remoteReadme:
    'https://raw.githubusercontent.com/842u/docker-nginx-rpi/main/README.md',
};

export const dockerRpi = createProject(data);
