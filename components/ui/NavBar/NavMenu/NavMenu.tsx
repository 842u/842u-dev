import { MouseEventHandler } from 'react';

import { NavItem, NavMenuItem } from './NavMenuItem/NavMenuItem';

type NavMenuProps = {
  items: NavItem[];
  onItemClick?: MouseEventHandler;
  isActive?: boolean;
};

export function NavMenu({
  items,
  onItemClick,
  isActive = false,
}: NavMenuProps) {
  return (
    <menu
      className={`${
        isActive ? 'operational' : ''
      } absolute left-full top-0 flex h-screen w-screen flex-col justify-center px-6 text-6xl transition-all operational:left-0 operational:bg-light operational:dark:bg-dark md:static md:h-3/4 md:w-auto md:translate-x-0 md:flex-row md:divide-x-2 md:px-0 md:text-4xl`}
    >
      {items?.map((item) => (
        <NavMenuItem key={item.name} href={item.href} onClick={onItemClick}>
          {item.name}
        </NavMenuItem>
      ))}
    </menu>
  );
}
