import { twMerge } from 'tailwind-merge';

type SectionProps = {
  id?: string;
  title?: string;
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
};

export function Section({
  id,
  title,
  ariaLabel,
  className,
  children,
}: SectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className={twMerge('mx-4 my-8 md:mx-16 md:my-20 lg:m-36', className)}
      id={id}
    >
      {title && <h2 className="text-right text-4xl md:text-5xl">{title}</h2>}
      {children}
    </section>
  );
}
