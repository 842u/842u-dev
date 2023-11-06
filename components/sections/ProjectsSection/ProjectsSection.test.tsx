import { render, screen } from '@testing-library/react';

import { allProjects } from '@/projects/allProjects';

import { ProjectsSection } from './ProjectsSection';

window.HTMLMenuElement.prototype.scrollBy = jest.fn(() => {});

jest.mock('../../../utils/helpers.ts', () => ({
  ...jest.requireActual('../../../utils/helpers.ts'),
  extendArray: () => allProjects.map((project) => project.name),
}));

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
