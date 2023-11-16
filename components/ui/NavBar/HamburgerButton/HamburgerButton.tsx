import { twMerge } from 'tailwind-merge';

type HamburgerButtonProps = {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function HamburgerButton({
  className,
  isActive = false,
  onClick,
}: HamburgerButtonProps) {
  return (
    <button
      aria-label="menu"
      className={twMerge(
        `${isActive ? 'operational' : ''} group aspect-square w-20 p-3`,
        className,
      )}
      type="button"
      onClick={onClick}
    >
      <div className="flex aspect-square w-full flex-col items-center justify-around overflow-hidden">
        <div className="h-1 w-full bg-dark transition-opacity group-operational:opacity-0 dark:bg-light" />

        <div className="relative h-1 w-full">
          <div className="absolute h-full w-full origin-center bg-dark transition-transform group-operational:rotate-45 dark:bg-light" />

          <div className=" absolute h-full w-full origin-center bg-dark transition-transform group-operational:rotate-[-45deg] dark:bg-light" />
        </div>

        <div className="h-1 w-full bg-dark transition-opacity group-operational:opacity-0 dark:bg-light" />
      </div>
    </button>
  );
}
