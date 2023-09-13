type ToolIconProps = {
  className?: string;
  href: string;
  title: string;
  children: React.ReactNode;
};

export type SpecificToolIconProps = {
  className?: string;
};

export function ToolIcon({
  href,
  title,
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
        viewBox="0 0 128 128"
      >
        {children}
      </svg>
    </a>
  );
}
