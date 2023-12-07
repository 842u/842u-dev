import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { NavBar } from '@/components/ui/NavBar/NavBar';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock('next/navigation', () => ({
  usePathname() {
    return '';
  },
}));

describe('NavBar', () => {
  it('should render <header> element', () => {
    render(<NavBar />);

    const header = screen.getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('should render <nav> element', () => {
    render(<NavBar />);

    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  it('should render toggle menu button', () => {
    render(<NavBar />);

    const button = screen.getByRole('button', { name: 'menu' });

    expect(button).toBeInTheDocument();
  });

  it('should render toggle color theme button', () => {
    render(<NavBar />);

    const button = screen.getByRole('button', { name: 'color theme' });

    expect(button).toBeInTheDocument();
  });

  it('should render navigation list', () => {
    render(<NavBar />);

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });
});
