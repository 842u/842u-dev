'use client';

import { useEffect, useState } from 'react';

import { HamburgerButton } from './HamburgerButton/HamburgerButton';
import { NavMenu } from './NavMenu/NavMenu';
import ThemeButton from './ThemeButton/ThemeButton';

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
    href: '/#contact',
  },
];

export function NavBar() {
  const [scrollShow, setScrollShow] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  const [mobileIsActive, setMobileIsActive] = useState(false);

  const scrollHandler = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setScrollShow(false);
      } else {
        setScrollShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  const hamburgerButtonHandler = () => {
    setMobileIsActive((activeState) => !activeState);
    setScrollShow(true);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollHandler);

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 h-20 w-screen backdrop-blur-md transition-all md:px-10 ${
        !scrollShow && !mobileIsActive ? 'translate-y-[-100%]' : 'translate-y-0'
      }`}
    >
      <nav className="flex h-full w-full items-center md:flex-row-reverse md:justify-between">
        <HamburgerButton
          className="fixed right-0 top-0 z-40 md:invisible"
          isActive={mobileIsActive}
          onClick={hamburgerButtonHandler}
        />

        <div className="z-40 aspect-square w-20 p-2 md:visible md:w-16">
          <ThemeButton className="md:visible" isActive={mobileIsActive} />
        </div>

        <NavMenu isActive={mobileIsActive} items={navItems} />
      </nav>
    </header>
  );
}
