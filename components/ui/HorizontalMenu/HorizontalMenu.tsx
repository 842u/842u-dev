import React from 'react';

type HorizontalMenuProps = {
  children: string[];
  currentItem?: string;
  onClickItem?: (event: React.MouseEvent) => void;
};

export function HorizontalMenu({
  children,
  onClickItem,
  currentItem,
}: HorizontalMenuProps) {
  return (
    <menu
      className="text-3xl text-dark-lighter dark:text-light-darker"
      data-testid="horizontal-menu"
    >
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
