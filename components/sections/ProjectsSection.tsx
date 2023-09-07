'use client';

import { useState } from 'react';

import { HorizontalMenu } from '../ui/HorizontalMenu';
import { Project, ProjectCard } from '../ui/ProjectCard/ProjectCard';

const mockProjects: Project[] = [
  {
    name: 'Project 1',
    image: '/placeholder-image.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
    vel aspernatur deleniti ipsam tempore molestias impedit aliquid
    obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste
    cumque aliquid quaerat, non harum natus dolor omnis. Architecto
    obcaecati debitis accusamus labore, magni optio aliquid, itaque
    officiis sed delectus ipsum. Pariatur, mollitia.`,
    tools: [
      {
        name: 'nextjs',
        icon: '/next.svg',
      },
    ],
  },
  {
    name: 'Project 2',
    image: '/placeholder-image.jpg',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
    vel aspernatur deleniti ipsam tempore molestias impedit aliquid
    obcaecati! In rerum, odio quibusdam dicta quas voluptas illo iste
    cumque aliquid quaerat, non harum natus dolor omnis.`,
    tools: [
      {
        name: 'nextjs',
        icon: '/next.svg',
      },
    ],
  },
];

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(mockProjects[0]);

  const menuItemClickHandler = (event: React.SyntheticEvent<EventTarget>) => {
    const clickedProject = mockProjects.find(
      (project) =>
        project.name === (event.target as HTMLButtonElement).innerText,
    );

    setCurrentProject(clickedProject || mockProjects[0]);
  };

  return (
    <section
      aria-label="projects overview"
      className="min-h-screen px-4 md:px-16 lg:px-36"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="self-end text-4xl md:text-5xl">projects</h2>

        <HorizontalMenu
          currentItem={currentProject.name}
          onClickItem={menuItemClickHandler}
        >
          {mockProjects.map((mockProject) => mockProject.name)}
        </HorizontalMenu>
      </div>

      <ProjectCard project={currentProject} />
    </section>
  );
}
