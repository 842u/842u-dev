import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('should render link to github profile', () => {
    const gitHubProfile = 'https://github.com/842u';

    render(<Footer />);
    const link = screen.getByTitle('GitHub');

    expect(link).toHaveAttribute('href', gitHubProfile);
  });

  it('should render link to linkedin profile', () => {
    const linkedinProfile =
      'https://www.linkedin.com/in/kamil-ba%C5%BCanow-025837234';

    render(<Footer />);
    const link = screen.getByTitle('Linkedin');

    expect(link).toHaveAttribute('href', linkedinProfile);
  });

  it('should render link to contact email with mailto:', () => {
    const email = 'contact@842u.dev';

    render(<Footer />);
    const link = screen.getByTitle(email);

    expect(link).toHaveAttribute('href', `mailto:${email}`);
  });

  it('should render webpage author name', () => {
    const firstName = /kamil/i;
    const lastName = /bażanow/i;

    render(<Footer />);
    const firstNameText = screen.getByText(firstName);
    const lastNameText = screen.getByText(lastName);

    expect(firstNameText).toBeInTheDocument();
    expect(lastNameText).toBeInTheDocument();
  });
});
