import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

import { SelectionArrow } from '@/components/decorative/SelectionArrow';

type LinkButtonProps = {
  href: string;
  target?: string;
  children?: React.ReactNode;
  className?: string;
};

export function LinkButton({
  href,
  target,
  children,
  className = '',
}: LinkButtonProps) {
  return (
    <Link
      className={twMerge(
        `before:bg-dark after:bg-dark hover:animate-blink dark:before:bg-light dark:after:bg-light inline-block w-full text-3xl before:block before:h-0.5 before:w-full after:block after:h-0.5 after:w-full md:w-64 md:min-w-fit md:text-4xl`,
        className,
      )}
      href={href}
      target={target}
    >
      <div className="my-4 flex items-center gap-6 md:w-fit">
        <SelectionArrow />
        {children}
      </div>
    </Link>
  );
}
