'use client';

import { useState } from 'react';

import { HamburgerButton } from './HamburgerButton';
import { LinkButton } from './LinkButton';

export type NavBarLink = {
  name: string;
  href: string;
};

type NavBarProps = {
  links: NavBarLink[];
};

export function NavBar({ links }: NavBarProps) {
  const [isActive, setIsActive] = useState(false);

  const hamburgerButtonHandler = () =>
    setIsActive((activeState) => !activeState);

  return (
    <header>
      <HamburgerButton
        className="z-50"
        isActive={isActive}
        onClick={hamburgerButtonHandler}
      />

      <nav
        className={`${
          isActive ? 'operational' : ''
        } fixed left-full z-40 flex h-screen w-screen flex-col justify-center bg-light transition-all ease-in-out operational:left-0`}
      >
        <ul className="p-4">
          {links.map((link) => (
            <li key={link.name}>
              <LinkButton href={link.href}>{link.name}</LinkButton>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
