import { render, screen } from '@testing-library/react';

import { HorizontalMenu } from './HorizontalMenu';

const mockItems = [{ name: 'item1' }, { name: 'item2' }, { name: 'item3' }];

describe('HorizontalMenu', () => {
  it('should render menu list', () => {
    render(<HorizontalMenu items={mockItems} />);

    const menu = screen.getByRole('list');

    expect(menu).toBeInTheDocument();
  });

  it('should render all provided items', () => {
    render(<HorizontalMenu items={mockItems} />);

    mockItems.forEach((item) => {
      const itemName = screen.getByText(item.name);

      expect(itemName).toBeInTheDocument();
    });
  });
});
