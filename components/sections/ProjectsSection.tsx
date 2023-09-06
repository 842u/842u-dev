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
];

export function ProjectsSection() {
  return (
    <section
      aria-label="projects overview"
      className="min-h-screen border-2 border-light px-4 md:px-16 lg:px-36"
    >
      <div className="flex flex-col items-center justify-center border-2 border-success">
        <h2 className="text-3xl">projects</h2>

        <HorizontalMenu>
          {mockProjects.map((mockProject) => mockProject.name)}
        </HorizontalMenu>
      </div>

      <ProjectCard project={mockProjects[0]} />
    </section>
  );
}
