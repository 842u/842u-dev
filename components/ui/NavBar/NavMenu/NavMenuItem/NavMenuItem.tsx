'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';

import { SelectionArrow } from '@/components/decorative/SelectionArrow';

export type NavItem = {
  name: string;
  href: string;
};

type NavMenuItemProps = {
  children: React.ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function NavMenuItem({ children, href, onClick }: NavMenuItemProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href || (pathname.includes(href) && href !== '/');

  return (
    <li className="relative text-dark-lighter before:top-0 before:block before:h-0.5 before:w-full before:bg-dark-lighter after:absolute after:block after:h-0.5 after:w-full after:bg-dark-lighter dark:text-light-darker dark:before:bg-light-darker dark:after:bg-light-darker md:my-2 md:px-4 md:before:hidden md:after:hidden">
      <Link
        className={`${
          isActive ? 'operational' : ''
        } my-3 block operational:text-dark operational:dark:text-light md:my-0 md:h-full`}
        href={href}
        onClick={onClick}
      >
        <div className="flex h-full w-full items-center gap-6">
          <SelectionArrow className="md:hidden" />
          {children}
        </div>
      </Link>
    </li>
  );
}
