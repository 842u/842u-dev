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
        `inline-block w-full text-3xl before:block before:h-0.5 before:w-full before:bg-dark after:block after:h-0.5 after:w-full after:bg-dark hover:animate-blink dark:before:bg-light dark:after:bg-light md:w-64 md:min-w-fit md:text-4xl`,
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
