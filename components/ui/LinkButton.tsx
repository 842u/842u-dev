import Link from 'next/link';

import { SelectionArrow } from '@/components/decorative/SelectionArrow';

type LinkButtonProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

export function LinkButton({ href, children, className }: LinkButtonProps) {
  return (
    <Link
      className={`${className} before:block before:h-0.5 before:w-full before:bg-dark after:block after:h-0.5 after:w-full after:bg-dark dark:before:bg-light  dark:after:bg-light md:w-64 md:min-w-fit`}
      href={href}
    >
      <div className="my-4 flex items-center gap-6 text-3xl md:w-fit">
        <SelectionArrow />
        {children}
      </div>
    </Link>
  );
}
