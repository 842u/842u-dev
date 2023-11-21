import { twMerge } from 'tailwind-merge';

type SectionProps = {
  title?: string;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  ref?: React.MutableRefObject<HTMLElement>;
};

export function Section({
  title,
  ariaLabel,
  className,
  children,
  ref,
}: SectionProps) {
  return (
    <section
      ref={ref}
      aria-label={ariaLabel}
      className={twMerge('mx-4 my-8 md:mx-16 md:my-36 lg:mx-36', className)}
    >
      {title && <h2 className="text-right text-4xl md:text-5xl">{title}</h2>}
      {children}
    </section>
  );
}
