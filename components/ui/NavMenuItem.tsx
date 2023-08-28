import Link from 'next/link';

import { SelectionArrow } from '../decorative/SelectionArrow';

export type NavItem = {
  name: string;
  href: string;
};

type NavMenuItemProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
};

export function NavMenuItem({ children, className, href }: NavMenuItemProps) {
  return (
    <li
      className={`${className} relative text-dark-lighter before:top-0 before:block before:h-0.5 before:w-full before:bg-dark-lighter after:absolute after:block after:h-0.5 after:w-full after:bg-dark-lighter md:before:hidden md:after:hidden`}
    >
      <Link className="my-4 block md:my-0 md:h-full" href={href}>
        <div className="flex h-full w-full items-center gap-6">
          <SelectionArrow className="md:hidden" />
          {children}
        </div>
      </Link>
    </li>
  );
}
