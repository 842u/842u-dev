import { render, screen } from '@testing-library/react';

import { allProjects } from '@/projects/allProjects';

import { ProjectsSection } from './ProjectsSection';

describe('ProjectsSection', () => {
  it('should render heading with section title', () => {
    render(<ProjectsSection projects={allProjects} />);

    const heading = screen.getByRole('heading', { name: 'projects' });

    expect(heading).toBeInTheDocument();
  });

  it('should render projects menu', () => {
    render(<ProjectsSection projects={allProjects} />);

    const heading = screen.getByTestId('horizontal-menu');

    expect(heading).toBeInTheDocument();
  });

  it('should render project card', () => {
    render(<ProjectsSection projects={allProjects} />);

    const heading = screen.getByTestId('project-card');

    expect(heading).toBeInTheDocument();
  });
});
