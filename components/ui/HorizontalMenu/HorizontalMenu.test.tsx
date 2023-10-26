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

  it('should render button for at least every children', () => {
    render(<HorizontalMenu>{mockItems}</HorizontalMenu>);

    mockItems.forEach((item) => {
      const button = screen.getByText(item);

      expect(button).toBeInTheDocument();
    });
  });

  it('should call clickHandler when any button is clicked', async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    const elem = render(
      <HorizontalMenu onClick={clickHandler}>{mockItems}</HorizontalMenu>,
    );
    elem.baseElement.scrollBy = jest.fn(() => {});

    const buttons = screen.getAllByRole('button');

    buttons.forEach(async (button) => {
      await user.click(button);

      expect(clickHandler).toHaveBeenCalled();
    });
  });
});
