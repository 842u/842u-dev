type SectionProps = {
  title?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
};

export function Section({ title, ariaLabel, children }: SectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="mx-4 my-8 md:mx-16 md:my-36 lg:mx-36"
    >
      <h2 className="text-right text-4xl md:text-5xl">{title}</h2>
      {children}
    </section>
  );
}
