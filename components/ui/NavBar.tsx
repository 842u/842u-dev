'use client';

import { useState } from 'react';

import { GlobalThemeProvider } from '../providers/GlobalThemeProvider';
import { HamburgerButton } from './NavBar/HamburgerButton/HamburgerButton';
import { NavMenu } from './NavMenu';
import ThemeButton from './ThemeButton';

const navItems = [
  {
    name: 'home',
    href: '/',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'contact',
    href: '#contact',
  },
];

export function NavBar() {
  const [isActive, setIsActive] = useState(false);

  const hamburgerButtonHandler = () =>
    setIsActive((activeState) => !activeState);

  return (
    <header className="fixed z-50 h-20 w-screen bg-light transition-colors dark:bg-dark">
      <nav className="flex h-full w-full items-center md:flex-row-reverse md:justify-between">
        <HamburgerButton
          className="fixed right-0 top-0 z-40 md:invisible"
          isActive={isActive}
          onClick={hamburgerButtonHandler}
        />

        <div className="z-40 aspect-square w-20 md:visible md:w-16">
          <GlobalThemeProvider>
            <ThemeButton className="md:visible" isActive={isActive} />
          </GlobalThemeProvider>
        </div>

        <NavMenu isActive={isActive} items={navItems} />
      </nav>
    </header>
  );
}
