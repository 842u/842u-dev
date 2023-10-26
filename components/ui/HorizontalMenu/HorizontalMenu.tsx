import React, { useEffect, useRef, useState } from 'react';

type HorizontalMenuProps = {
  children: string[];
  itemsMultiplier?: number;
  activeItemLeftOffset?: number;
  onClick?: (event: React.MouseEvent) => void;
};

function extendItemsArray(items: string[], multiplier: number): string[] {
  const fillArray = Array(multiplier).fill(items);

  const extendedItems = fillArray.flat(Infinity);

  return extendedItems;
}

export function HorizontalMenu({
  children,
  itemsMultiplier = 0,
  activeItemLeftOffset = 0,
  onClick,
}: HorizontalMenuProps) {
  const [activeItemIndex, setActiveItemIndex] = useState(children.length);

  const items = useRef(extendItemsArray(children, itemsMultiplier));
  const menuElementRef = useRef(null);
  const itemsElements = useRef(null);

  function scrollToItem(
    behavior: 'smooth' | 'instant',
    event?: React.MouseEvent,
    index?: number,
  ) {
    if (event) {
      (menuElementRef.current! as HTMLMenuElement).scrollBy({
        behavior,
        left:
          (event.target as HTMLButtonElement).getBoundingClientRect().x -
          (event.target as HTMLButtonElement).getBoundingClientRect().width -
          activeItemLeftOffset,
      });
    }

    if (index || index === 0) {
      (menuElementRef.current! as HTMLMenuElement).scrollBy({
        behavior,
        left:
          (itemsElements.current! as HTMLButtonElement[])[
            index
          ].getBoundingClientRect().x -
          (itemsElements.current! as HTMLButtonElement[])[
            index
          ].getBoundingClientRect().width -
          activeItemLeftOffset,
      });
    }
  }

  function buttonClickHandler(event: React.MouseEvent) {
    const indexOfClickedButton = (
      itemsElements.current! as HTMLButtonElement[]
    ).indexOf(event?.target as HTMLButtonElement);

    if (activeItemIndex < children.length * 2) {
      setActiveItemIndex(indexOfClickedButton);
      scrollToItem('smooth', event);
    }

    if (onClick) onClick(event);
  }

  const scrollEndHandler = () => {
    if (
      activeItemIndex >= children.length * 2 ||
      activeItemIndex <= children.length
    ) {
      const offset =
        activeItemIndex -
        Math.floor(activeItemIndex / children.length) * children.length;

      setActiveItemIndex(children.length + offset);
      scrollToItem('instant', undefined, children.length + offset);
    }
  };

  useEffect(() => {
    (itemsElements.current! as HTMLButtonElement[]) = Array.from(
      (menuElementRef.current! as HTMLMenuElement).querySelectorAll('button'),
    );

    scrollToItem('instant', undefined, activeItemIndex);
  }, []);

  useEffect(() => {
    (menuElementRef.current! as HTMLMenuElement).addEventListener(
      'scrollend',
      scrollEndHandler,
    );

    return () =>
      (menuElementRef.current! as HTMLMenuElement).removeEventListener(
        'scrollend',
        scrollEndHandler,
      );
  }, [activeItemIndex]);

  return (
    <menu
      ref={menuElementRef}
      className="max-w-full touch-none divide-x-2 overflow-x-scroll whitespace-nowrap text-4xl text-dark-lighter no-scrollbar dark:text-light-darker"
      data-testid="horizontal-menu"
    >
      {items.current.map((item, index) => {
        const isActive = activeItemIndex === index;

        return (
          <li className="inline-block">
            <button
              // eslint-disable-next-line
              key={index}
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
