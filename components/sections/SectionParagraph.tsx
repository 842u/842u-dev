import { twMerge } from 'tailwind-merge';

type SectionParagraphProps = {
  className?: string;
  children?: React.ReactNode;
  dataTestId?: string;
};

export function SectionParagraph({
  className,
  children,
  dataTestId,
}: SectionParagraphProps) {
  return (
    <p
      className={twMerge(
        'my-10 text-lg md:my-20 md:text-2xl lg:max-w-[50vw] lg:text-xl',
        className,
      )}
      data-testid={dataTestId}
    >
      {children}
    </p>
  );
}
