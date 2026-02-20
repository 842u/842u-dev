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
        `${isActive ? 'operational' : ''} group aspect-square w-20 cursor-pointer p-3`,
        className,
      )}
      type="button"
      onClick={onClick}
    >
      <div className="flex aspect-square w-full flex-col items-center justify-around overflow-hidden">
        <div className="bg-dark group-operational:opacity-0 dark:bg-light h-1 w-full transition-opacity" />

        <div className="relative h-1 w-full">
          <div className="bg-dark group-operational:rotate-45 dark:bg-light absolute h-full w-full origin-center transition-transform" />

          <div className="bg-dark group-operational:rotate-[-45deg] dark:bg-light absolute h-full w-full origin-center transition-transform" />
        </div>

        <div className="bg-dark group-operational:opacity-0 dark:bg-light h-1 w-full transition-opacity" />
      </div>
    </button>
  );
}
