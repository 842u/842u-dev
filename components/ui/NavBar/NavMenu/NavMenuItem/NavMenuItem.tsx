import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { SelectionArrow } from '@/components/decorative/SelectionArrow';

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
      className={twMerge(
        `relative text-dark-lighter before:top-0 before:block before:h-0.5 before:w-full before:bg-dark-lighter after:absolute after:block after:h-0.5 after:w-full after:bg-dark-lighter dark:text-light-darker dark:before:bg-light-darker dark:after:bg-light-darker md:my-2 md:before:hidden md:after:hidden`,
        className,
      )}
    >
      <Link className="my-3 block md:my-0 md:h-full" href={href}>
        <div className="flex h-full w-full items-center gap-6">
          <SelectionArrow className="md:hidden" />
          {children}
        </div>
      </Link>
    </li>
  );
}
