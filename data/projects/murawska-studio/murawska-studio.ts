import { AvaliableTools, ProjectData } from '@/types';
import { createProject } from '@/utils/helpers';

const data: ProjectData = {
  name: 'murawska.studio',
  image: '/placeholder-image.jpg',
  description: `A project of a landing page for a private person. The goal was to create a page where user can add and show personal projects as a form of a business portfolio. There is integration with Sanity headless CMS to minimize the developer interference in adding and managing new content on the page and to give the user a clear and easy way to do that on his own. User can also live preview draft changes to see how new content will look without the need to incorporate those changes into the production dataset.`,
  tools: [
    AvaliableTools.JavaScript,
    AvaliableTools.React,
    AvaliableTools.NextJS,
    AvaliableTools.Sanity,
    AvaliableTools.Sass,
    AvaliableTools.Git,
    AvaliableTools.GitHub,
  ],
  repository: 'https://github.com/842u/kor-mur',
  remoteReadme: 'https://raw.githubusercontent.com/842u/kor-mur/main/README.md',
};

export const murawskaStudio = createProject(data);
