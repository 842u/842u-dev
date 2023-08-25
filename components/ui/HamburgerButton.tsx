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
      aria-label="Menu"
      className={`${className} ${
        isActive ? 'bg-light' : 'bg-dark'
      } fixed right-0 top-0 aspect-square w-20 border-2 border-dark`}
      type="button"
    />
  );
}
