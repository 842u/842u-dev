'use client';

import { useState } from 'react';

import { HamburgerButton } from './HamburgerButton';
import { NavMenu } from './NavMenu';

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
    <header className="fixed z-50 h-20 w-screen">
      <nav className="flex h-full w-full items-center">
        <HamburgerButton
          className="fixed right-0 top-0 z-40 md:hidden"
          isActive={isActive}
          onClick={hamburgerButtonHandler}
        />

        <NavMenu isActive={isActive} items={navItems} />
      </nav>
    </header>
  );
}
