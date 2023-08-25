type HamburgerButtonProps = {
  className: string;
  isActive?: boolean;
};

export function HamburgerButton({
  className,
  isActive = true,
}: HamburgerButtonProps) {
  return (
    <button
      aria-label="menu"
      className={`${className} ${
        isActive ? 'operational' : ''
      } group fixed right-0 top-0 aspect-square w-20 border-dark p-3`}
      type="button"
    >
      <div className="flex aspect-square w-full flex-col items-center justify-between overflow-hidden">
        <div className="h-1 w-full bg-dark transition-opacity group-operational:opacity-0" />

        <div className="relative w-full">
          <div className="absolute h-1 w-full origin-center bg-dark transition-transform group-operational:rotate-45 group-operational:scale-[2]" />

          <div className="absolute h-1 w-full origin-center bg-dark transition-transform group-operational:rotate-[-45deg] group-operational:scale-[2]" />
        </div>

        <div className="h-1 w-full bg-dark transition-opacity group-operational:opacity-0" />
      </div>
    </button>
  );
}
