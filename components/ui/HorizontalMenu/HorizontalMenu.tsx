/* eslint react/no-array-index-key: 0 */

import React, { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useInfiniteMenu } from '@/hooks/useInfiniteMenu';
import { MediaBreakpoints } from '@/types';
import { getContainerElementsArray, scrollToElement } from '@/utils/helpers';

type HorizontalMenuProps = {
  children: string[];
  onClick?: (event: React.MouseEvent) => void;
  mediaBreakpoints: MediaBreakpoints;
  className?: string;
};

export function HorizontalMenu({
  children,
  onClick,
  mediaBreakpoints,
  className,
}: HorizontalMenuProps) {
  const menuElementRef = useRef<HTMLMenuElement | null>(null);

  const {
    items,
    activeItemIndex,
    setActiveItemIndex,
    activeItemContainerOffset,
  } = useInfiniteMenu(children, menuElementRef, mediaBreakpoints);

  function buttonClickHandler(event: React.MouseEvent) {
    const itemsElements = getContainerElementsArray(
      menuElementRef.current!,
      'button',
    );

    const clickedItemIndex = itemsElements.indexOf(
      event.target as HTMLButtonElement,
    );

    setActiveItemIndex(clickedItemIndex);

    scrollToElement(
      menuElementRef.current!,
      event.target as HTMLButtonElement,
      'smooth',
      activeItemContainerOffset.current,
    );

    if (onClick) onClick(event);
  }

  return (
    <menu
      ref={menuElementRef}
      className={twMerge(
        'w-full max-w-full touch-none divide-x-2 overflow-x-scroll whitespace-nowrap text-4xl text-dark-lighter no-scrollbar dark:text-light-darker',
        className,
      )}
      data-testid="horizontal-menu"
    >
      {items.map((item, index) => {
        const isActive = activeItemIndex === index;

        return (
          <li key={index} className="inline-block">
            <button
              className={`${
                isActive ? 'operational' : ''
              } px-2 operational:text-dark operational:dark:text-light`}
              type="button"
              onClick={buttonClickHandler}
            >
              {item}
            </button>
          </li>
        );
      })}
    </menu>
  );
}
