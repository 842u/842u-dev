import { render, screen } from '@testing-library/react';

import { mockProjects } from '@/data/projects/mockProjects';

import { ProjectCard } from './ProjectCard';

const mockProject = mockProjects[0];

describe('ProjectCard', () => {
  it('should render image of a project', () => {
    render(<ProjectCard project={mockProject} />);

    const image = screen.getByRole('img', {
      name: `${mockProject.name} overview image`,
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

    const regex = new RegExp(`${mockProject.name}`, 'i');

    const projectLink = screen.getByRole('link', { name: regex });

    expect(projectLink).toBeInTheDocument();
    expect(projectLink).toHaveAttribute(
      'href',
      `/projects/${mockProject.slug}`,
    );
  });
});
