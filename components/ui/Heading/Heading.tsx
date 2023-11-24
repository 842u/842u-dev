export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  headingTag: HeadingTag;
  className?: string;
  children?: React.ReactNode;
};

export function Heading({
  headingTag: headingLevel,
  className,
  children,
}: HeadingProps) {
  const HeadingTag = headingLevel;

  return <HeadingTag className={className}>{children}</HeadingTag>;
}
