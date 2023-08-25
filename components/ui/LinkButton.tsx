import Link from 'next/link';

import { SelectionArrow } from '../decorative/SelectionArrow';

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
};

export function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      className="relative block h-full w-full text-6xl before:my-4 before:block before:h-0.5 before:w-full before:bg-text after:absolute after:my-4 after:block after:h-0.5 after:w-full after:bg-text"
      href={href}
    >
      <SelectionArrow />
      {children}
    </Link>
  );
}
