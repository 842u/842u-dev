import React from 'react';

type HorizontalMenuProps = {
  children: string[];
  currentItem?: string;
  onClickItem?: <T extends React.SyntheticEvent>(event: T) => void;
};

export function HorizontalMenu({
  children,
  onClickItem,
  currentItem,
}: HorizontalMenuProps) {
  return (
    <menu className="flex flex-wrap justify-center gap-y-8 divide-x-2 divide-dark-lighter text-3xl text-dark-lighter dark:divide-light-darker dark:text-light-darker md:self-start md:text-4xl">
      {children?.map((child) => {
        const isActive = currentItem === child;

        return (
          <li key={child}>
            <button
              className={`${
                isActive ? 'operational' : ''
              } px-2 operational:text-dark operational:dark:text-light`}
              type="button"
              onClick={onClickItem}
            >
              {child}
            </button>
          </li>
        );
      })}
    </menu>
  );
}