import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HamburgerButton } from './HamburgerButton';

describe('HamburgerButton', () => {
  it('should render button', () => {
    render(<HamburgerButton />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).toBeInTheDocument();
  });

  it('should have .operational class while isActive', () => {
    const isActive = true;

    render(<HamburgerButton isActive={isActive} />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).toHaveClass('operational');
  });

  it('should not have .operational class while !isActive', () => {
    const isActive = false;

    render(<HamburgerButton isActive={isActive} />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).not.toHaveClass('operational');
  });

  it('should call clickHandler when clicked', async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(<HamburgerButton onClick={clickHandler} />);

    const button = screen.getByRole('button', { name: 'menu' });
    await user.click(button);

    expect(clickHandler).toHaveBeenCalled();
  });
});
