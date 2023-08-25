export function SelectionArrow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative mr-4 inline-block h-10 w-10 overflow-hidden border-2 before:absolute before:right-2/4 before:h-full before:w-full before:rotate-45 before:border-r-4 before:border-t-4 after:absolute after:box-border after:h-full after:w-full after:border-8 after:border-background"
    />
  );
}
