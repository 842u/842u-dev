import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { HorizontalMenuItem } from '@/types';

type HorizontalMenuProps = {
  items: HorizontalMenuItem[];
  className?: string;
};

export const HorizontalMenu = forwardRef<HTMLMenuElement, HorizontalMenuProps>(
  (props, ref) => (
    <menu
      ref={ref}
      className={twMerge(
        'text-dark-lighter no-scrollbar dark:text-light-darker w-full max-w-full touch-none divide-x-2 overflow-x-scroll text-4xl whitespace-nowrap',
        props.className,
      )}
      data-testid="horizontal-menu"
    >
      {props.items.map((item) => (
        <li key={item.name} className="group inline-block px-3">
          <button
            className="hover:animate-blink group-operational:text-dark group-operational:dark:text-light px-2"
            tabIndex={-1}
            type="button"
          >
            {item.name.toLowerCase()}
          </button>
        </li>
      ))}
    </menu>
  ),
);
