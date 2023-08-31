import { render, screen } from '@testing-library/react';

import ThemeButton from './ThemeButton';

describe('ThemeButton', () => {
  it('should render button', () => {
    render(<ThemeButton />);

    const button = screen.getByRole('button', { name: 'color theme' });

    expect(button).toBeInTheDocument();
  });

  it('should have .operational class while isActive', () => {
    const active = true;

    render(<ThemeButton isActive={active} />);

    const button = screen.getByRole('button', { name: 'color theme' });

    expect(button).toHaveClass('operational');
  });

  it('should not have .operational class while isActive', () => {
    const active = false;

    render(<ThemeButton isActive={active} />);

    const button = screen.getByRole('button', { name: 'color theme' });

    expect(button).not.toHaveClass('operational');
  });
});
