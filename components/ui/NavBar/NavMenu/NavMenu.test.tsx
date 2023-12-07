import { render, screen } from '@testing-library/react';

import { NavMenu } from './NavMenu';
import { NavItem } from './NavMenuItem/NavMenuItem';

jest.mock('next/navigation', () => ({
  usePathname() {
    return '';
  },
}));

const mockItems: NavItem[] = [
  {
    name: 'firstMock',
    href: '/firstMock',
  },
  {
    name: 'secondMock',
    href: '/secondMock',
  },
  {
    name: 'thirdMock',
    href: '/thirdMock',
  },
];

describe('NavMenu', () => {
  it('should render list', () => {
    render(<NavMenu />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('should render all provided items', () => {
    render(<NavMenu items={mockItems} />);

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(mockItems.length);
  });

  it('should have .operational class while isActive', () => {
    const active = true;

    render(<NavMenu isActive={active} />);

    const list = screen.getByRole('list');

    expect(list).toHaveClass('operational');
  });

  it('should not have .operational class while !isActive', () => {
    const active = false;

    render(<NavMenu isActive={active} />);

    const list = screen.getByRole('list');

    expect(list).not.toHaveClass('operational');
  });
});
