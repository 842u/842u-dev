import { render, screen } from '@testing-library/react';

import { Project, ProjectCard } from './ProjectCard';

const mockProject: Project = {
  name: 'mock project',
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
  slug: 'mock-project',
};

describe('ProjectCard', () => {
  it('should render image of a project', () => {
    render(<ProjectCard project={mockProject} />);

    const image = screen.getByRole('img', {
      name: 'mock project overview image',
    });

    expect(image).toBeInTheDocument();
  });

  it('should render heading with project name', () => {
    render(<ProjectCard project={mockProject} />);

    const heading = screen.getByRole('heading', { name: mockProject.name });

    expect(heading).toBeInTheDocument();
  });

  it('should render paragraph with project description', () => {
    render(<ProjectCard project={mockProject} />);

    const paragraph = screen.getByText(mockProject.description);

    expect(paragraph).toBeInTheDocument();
  });

  it('should render link to project', () => {
    render(<ProjectCard project={mockProject} />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/projects/${mockProject.slug}`);
  });
});
