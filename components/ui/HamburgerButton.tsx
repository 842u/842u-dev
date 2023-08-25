type HamburgerButtonProps = {
  className: string;
  isActive?: boolean;
};

export function HamburgerButton({
  className,
  isActive = false,
}: HamburgerButtonProps) {
  return (
    <button
      aria-label="menu"
      className={`${className} ${
        isActive ? 'asd' : 'asd'
      } group fixed right-0 top-0 aspect-square w-20 border-dark p-3`}
      type="button"
    >
      <div className="flex aspect-square w-full flex-col items-center justify-between overflow-hidden">
        <div className="h-1 w-full bg-dark transition-opacity group-hover:opacity-0" />

        <div className="relative w-full">
          <div className="absolute h-1 w-full origin-center bg-dark transition-transform group-hover:rotate-45 group-hover:scale-[2]" />

          <div className="absolute h-1 w-full origin-center bg-dark transition-transform group-hover:rotate-[-45deg] group-hover:scale-[2]" />
        </div>

        <div className="h-1 w-full bg-dark transition-opacity group-hover:opacity-0" />
      </div>
    </button>
  );
}
