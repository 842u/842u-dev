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
  function scrollToActiveItem(event: React.MouseEvent) {
    (event.target as HTMLButtonElement).scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }

  return (
    <menu
      className="no-scrollbar max-w-full divide-x-2 overflow-x-scroll whitespace-nowrap text-4xl text-dark-lighter dark:text-light-darker"
      data-testid="horizontal-menu"
    >
      {children?.map((itemName) => {
        const isActive = currentItem === itemName;

        return (
          <li key={itemName} className="inline-block">
            <button
              className={`${
                isActive ? 'operational' : ''
              } px-2 operational:text-dark operational:dark:text-light`}
              type="button"
              onClick={(event) => {
                if (onClickItem) {
                  onClickItem(event);
                }
                scrollToActiveItem(event);
              }}
            >
              {itemName}
            </button>
          </li>
        );
      })}
    </menu>
  );
}
