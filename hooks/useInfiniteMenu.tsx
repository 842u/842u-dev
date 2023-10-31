/*
 * Heavy imperative approach to create infinite horizontal menu.
 * Takes an array of string nodes as children and mediaBreakpoints object to
 * properly place active item acording to actual screen size.
 */

import { useEffect, useRef, useState } from 'react';

import { ItemOffset, MediaBreakpoints } from '@/types';
import {
  calculateSectorMultiplier,
  extendArray,
  getContainerElementsArray,
  getMediaBreakpointOffset,
  getSectorElementsWidth,
  scrollToElement,
} from '@/utils/helpers';

export function useInfiniteMenu(
  children: React.ReactNode[],
  menuElementRef: React.MutableRefObject<HTMLMenuElement | null>,
  mediaBreakpoints: MediaBreakpoints,
) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [items, setItems] = useState([...children]);

  const sectorWidth = useRef(0);
  const activeItemOffset = useRef<ItemOffset>(0);

  const middleSectorIndex =
    Math.floor(items.length / children.length / 2) * children.length;

  const offsetFromMiddleIndex =
    activeItemIndex -
    Math.floor(activeItemIndex / children.length) * children.length;

  /*
   * Dynamicly set items array acording to menu element width to prevent scroll
   * bugs and optimize items number.
   */
  function windowResizeHandler() {
    activeItemOffset.current = getMediaBreakpointOffset(mediaBreakpoints);

    const multiplier = calculateSectorMultiplier(
      menuElementRef.current!,
      sectorWidth.current,
    );

    setItems(extendArray(children, multiplier));
  }

  function scrollEndHandler() {
    const itemsElements = getContainerElementsArray(
      menuElementRef.current!,
      'button',
    );

    if (
      activeItemIndex >= middleSectorIndex + children.length ||
      activeItemIndex < middleSectorIndex
    ) {
      setActiveItemIndex(middleSectorIndex + offsetFromMiddleIndex);

      scrollToElement(
        menuElementRef.current!,
        itemsElements[middleSectorIndex + offsetFromMiddleIndex],
        'instant',
        activeItemOffset.current,
      );
    }
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);

    activeItemOffset.current = getMediaBreakpointOffset(mediaBreakpoints);

    const itemsElements = getContainerElementsArray(
      menuElementRef.current!,
      'button',
    );

    sectorWidth.current = getSectorElementsWidth(itemsElements);

    const multiplier = calculateSectorMultiplier(
      menuElementRef.current!,
      sectorWidth.current,
    );

    setItems(extendArray(children, multiplier));

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  useEffect(() => {
    menuElementRef.current?.addEventListener('scrollend', scrollEndHandler);

    return () => {
      menuElementRef.current?.removeEventListener(
        'scrollend',
        scrollEndHandler,
      );
    };
  }, [activeItemIndex]);

  useEffect(() => {
    const itemsElements = getContainerElementsArray(
      menuElementRef.current!,
      'button',
    );

    setActiveItemIndex(middleSectorIndex + offsetFromMiddleIndex);

    scrollToElement(
      menuElementRef.current!,
      itemsElements[middleSectorIndex + offsetFromMiddleIndex],
      'instant',
      activeItemOffset.current,
    );
  }, [items]);

  return {
    items,
    activeItemIndex,
    setActiveItemIndex,
    activeItemContainerOffset: activeItemOffset,
  };
}
