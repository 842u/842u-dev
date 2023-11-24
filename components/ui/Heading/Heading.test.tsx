import { render, screen } from '@testing-library/react';

import { Heading, HeadingTag } from './Heading';

describe('Heading', () => {
  it('should render heading element that is provided in heading level prop', () => {
    const headingTags: HeadingTag[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    headingTags.forEach((heading, index) => {
      render(<Heading headingTag={heading} />);
      const headingElement = screen.getByRole('heading', {
        level: index + 1,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
