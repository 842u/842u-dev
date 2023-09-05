import { render, screen } from '@testing-library/react';

import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('should render heading', () => {
    render(<HeroSection />);

    const heading = screen.getByRole('heading', { name: 'kamil bażanow' });

    expect(heading).toBeInTheDocument();
  });

  it('should render paragraph with description', () => {
    render(<HeroSection />);

    const paragraph = screen.getByTestId('hero-description');

    expect(paragraph).toBeInTheDocument();
  });

  it('should render link to about me page', () => {
    render(<HeroSection />);

    const link = screen.getByRole('link', { name: 'about me' });

    expect(link).toBeInTheDocument();
  });
});
