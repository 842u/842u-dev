import { twMerge } from 'tailwind-merge';

type SelectionArrowProps = {
  className?: string;
};

export function SelectionArrow({ className }: SelectionArrowProps) {
  return (
    <div
      aria-hidden
      className={twMerge(
        `pointer-events-none relative aspect-square h-10 flex-shrink-0 overflow-hidden border-2 before:absolute before:right-2/4 before:aspect-square before:h-full before:rotate-45 before:border-r-4 before:border-t-4 after:absolute after:left-0 after:h-full after:w-full after:border-8 after:border-light after:transition-colors dark:after:border-dark`,
        className,
      )}
    />
  );
}
