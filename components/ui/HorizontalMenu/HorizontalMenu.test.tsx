import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HorizontalMenu } from './HorizontalMenu';

const mockItems = ['item 1', 'item 2', 'item 3'];

describe('HorizontalMenu', () => {
  it('should render menu list', () => {
    render(<HorizontalMenu>{mockItems}</HorizontalMenu>);

    const menu = screen.getByRole('list');

    expect(menu).toBeInTheDocument();
  });

  it('should render all provided children', () => {
    render(<HorizontalMenu>{mockItems}</HorizontalMenu>);

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(mockItems.length);
  });

  it('should render button for every children', () => {
    render(<HorizontalMenu>{mockItems}</HorizontalMenu>);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(mockItems.length);
  });

  it('should call clickHandler when any button is clicked', async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(
      <HorizontalMenu onClickItem={clickHandler}>{mockItems}</HorizontalMenu>,
    );

    const buttons = screen.getAllByRole('button');

    buttons.forEach(async (button) => {
      await user.click(button);

      expect(clickHandler).toHaveBeenCalled();
    });
  });

  it('should have operational class on currentItem', () => {
    render(
      <HorizontalMenu currentItem={mockItems[0]}>{mockItems}</HorizontalMenu>,
    );

    const item = screen.getByText(mockItems[0]);

    expect(item).toHaveClass('operational');
  });

  it('should not have operational class on items that is not currentItem', () => {
    render(
      <HorizontalMenu currentItem={mockItems[0]}>{mockItems}</HorizontalMenu>,
    );

    const item2 = screen.getByText('item 2');
    const item3 = screen.getByText('item 3');

    expect(item2).not.toHaveClass('operational');
    expect(item3).not.toHaveClass('operational');
  });
});
