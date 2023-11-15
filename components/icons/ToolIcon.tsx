type ToolIconProps = {
  className?: string;
  href: string;
  title: string;
  viewBox: string;
  children: React.ReactNode;
};

export type SpecificToolIconProps = {
  className?: string;
  href?: string;
};

export function ToolIcon({
  href,
  title,
  viewBox,
  children,
  className = 'w-9',
}: ToolIconProps) {
  return (
    <a
      className={`block aspect-square ${className}`}
      href={href}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      <svg
        className="fill-dark transition-colors dark:fill-light"
        viewBox={viewBox}
      >
        {children}
      </svg>
    </a>
  );
}
