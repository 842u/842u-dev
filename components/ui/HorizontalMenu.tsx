type HorizontalMenuProps = {
  children?: string[];
};

export function HorizontalMenu({ children }: HorizontalMenuProps) {
  return (
    <menu className="flex flex-wrap justify-center gap-y-5 divide-x-2 text-2xl text-dark-lighter dark:text-light-darker">
      {children?.map((child) => <li>{child}</li>)}
    </menu>
  );
}
