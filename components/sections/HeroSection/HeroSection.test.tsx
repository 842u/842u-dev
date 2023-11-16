import { render, screen } from '@testing-library/react';

import { HeroSection } from './HeroSection';

describe('HeroSection', () => {
  it('should render heading with first name and last name', () => {
    const firstName = /kamil/i;
    const LastName = /bażanow/i;

    render(<HeroSection />);
    const firstNameElement = screen.getByText(firstName);
    const lastNameElement = screen.getByText(LastName);

    expect(firstNameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
  });

  it('should render paragraph with description', () => {
    render(<HeroSection />);
    const paragraph = screen.getByTestId('hero-description');

    expect(paragraph).toBeInTheDocument();
  });

  it('should render link to about me page', () => {
    const linkText = /about me/i;

    render(<HeroSection />);
    const link = screen.getByRole('link', { name: linkText });

    expect(link).toBeInTheDocument();
  });
});
