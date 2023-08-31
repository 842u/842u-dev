import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { NavBar } from '@/components/ui/NavBar';

describe('NavBar', () => {
  it('should render <header> element', () => {
    render(<NavBar />);

    screen.getByRole();
  });
});
