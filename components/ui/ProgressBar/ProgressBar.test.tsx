import { render, screen } from '@testing-library/react';

import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('should render labels if provided', () => {
    const startLabel = 'start';
    const middleLabel = 'middle';
    const endLabel = 'end';

    render(
      <ProgressBar
        endLabel={endLabel}
        middleLabel={middleLabel}
        percentageValue={50}
        startLabel={startLabel}
      />,
    );

    const startLabelText = screen.getByText(startLabel);
    const middleLabelText = screen.getByText(middleLabel);
    const endLabelText = screen.getByText(endLabel);

    expect(startLabelText).toBeInTheDocument();
    expect(middleLabelText).toBeInTheDocument();
    expect(endLabelText).toBeInTheDocument();
  });
});
