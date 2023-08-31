import { render, screen } from '@testing-library/react';

import { NavItem, NavMenuItem } from './NavMenuItem';

const mockNavItem: NavItem = {
  name: 'mock',
  href: '/mock',
};

describe('NavMenuItem', () => {
  it('should render list item', () => {
    render(
      <NavMenuItem href={mockNavItem.href}>{mockNavItem.name}</NavMenuItem>,
    );

    const listItem = screen.getByRole('listitem');

    expect(listItem).toBeInTheDocument();
  });

  it('should render link', () => {
    render(
      <NavMenuItem href={mockNavItem.href}>{mockNavItem.name}</NavMenuItem>,
    );

    const link = screen.getByRole('link', { name: mockNavItem.name });

    expect(link).toBeInTheDocument();
  });

  it('should render text provided as children', () => {
    const text = 'some text';

    render(<NavMenuItem href={mockNavItem.href}>{text}</NavMenuItem>);

    const textNode = screen.getByText(text);

    expect(textNode).toBeInTheDocument();
  });
});
