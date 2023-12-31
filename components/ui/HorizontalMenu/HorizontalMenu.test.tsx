import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { defaultMediaBreakpoints, HorizontalMenu } from './HorizontalMenu';

const mockItems = ['item 1', 'item 2', 'item 3'];

window.HTMLMenuElement.prototype.scrollBy = jest.fn(() => {});

jest.mock('../../../utils/helpers.ts', () => ({
  ...jest.requireActual('../../../utils/helpers.ts'),
  extendArray: () => mockItems,
}));

describe('HorizontalMenu', () => {
  it('should render menu list', () => {
    render(
      <HorizontalMenu mediaBreakpoints={defaultMediaBreakpoints}>
        {mockItems}
      </HorizontalMenu>,
    );

    const menu = screen.getByRole('list');

    expect(menu).toBeInTheDocument();
  });

  it('should render button for at least every children', () => {
    const itemsNumber = mockItems.length;

    render(
      <HorizontalMenu mediaBreakpoints={defaultMediaBreakpoints}>
        {mockItems}
      </HorizontalMenu>,
    );

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBeGreaterThanOrEqual(itemsNumber);
  });

  it('should call onClick when some button is clicked', async () => {
    const user = userEvent.setup();
    const clickHandler = jest.fn();

    render(
      <HorizontalMenu
        mediaBreakpoints={defaultMediaBreakpoints}
        onClick={clickHandler}
      >
        {mockItems}
      </HorizontalMenu>,
    );

    const buttons = screen.getAllByRole('button');

    buttons.forEach(async (button) => {
      await user.click(button);

      expect(clickHandler).toHaveBeenCalled();
    });
  });
});
