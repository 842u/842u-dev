import { render, screen } from '@testing-library/react';

import { allProjects } from '@/data/projects/allProjects';

import { AllProjectsSection } from './AllProjectsSection';

window.HTMLMenuElement.prototype.scrollBy = jest.fn(() => {});

jest.mock('../../../utils/helpers.ts', () => ({
  ...jest.requireActual('../../../utils/helpers.ts'),
  extendArray: () => allProjects.map((project) => project.name),
}));

describe('AllProjectsSection', () => {
  it('should render heading with "projects" text within', () => {
    const text = /projects/i;

    render(<AllProjectsSection projects={allProjects} />);
    const headingElement = screen.getByRole('heading', {
      name: text,
      level: 1,
    });

    expect(headingElement).toBeInTheDocument();
  });

  it('should render projects menu', () => {
    const testId = 'horizontal-menu';

    render(<AllProjectsSection projects={allProjects} />);
    const horizontalMenu = screen.getByTestId(testId);

    expect(horizontalMenu).toBeInTheDocument();
  });

  it('should render project card', () => {
    const testId = 'project-card';

    render(<AllProjectsSection projects={allProjects} />);
    const projectCard = screen.getByTestId(testId);

    expect(projectCard).toBeInTheDocument();
  });
});
