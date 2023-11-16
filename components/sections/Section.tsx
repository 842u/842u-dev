type SectionProps = {
  title?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
};

export function Section({ title, ariaLabel, children }: SectionProps) {
  return (
    <section
      aria-label={ariaLabel}
      className="min-h-screen px-4 md:px-16 lg:px-36"
    >
      <h2 className="text-right text-4xl md:text-5xl">{title}</h2>
      {children}
    </section>
  );
}
