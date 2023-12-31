import { render, screen } from '@testing-library/react';

import { allProjects } from '@/data/projects/allProjects';

import { ProjectsSection } from './ProjectsSection';

window.HTMLMenuElement.prototype.scrollBy = jest.fn(() => {});

jest.mock('../../../utils/helpers.ts', () => ({
  ...jest.requireActual('../../../utils/helpers.ts'),
  extendArray: () => allProjects.map((project) => project.name),
}));

describe('ProjectsSection', () => {
  it('should render heading with section title', () => {
    const title = /projects/i;

    render(<ProjectsSection projects={allProjects} />);

    const heading = screen.getByRole('heading', { name: title });

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
