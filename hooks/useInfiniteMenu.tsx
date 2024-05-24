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
  getMediaBreakpointData,
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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const sectorWidth = useRef(0);
  const activeItemOffset = useRef<ItemOffset>(0);

  const middleSectorIndex =
    Math.floor(items.length / children.length / 2) * children.length;

  const offsetFromMiddleIndex =
    activeItemIndex -
    Math.floor(activeItemIndex / children.length) * children.length;

  const minSwipeDistance = 50;

  /*
   * Dynamicly set items array acording to menu element width to prevent scroll
   * bugs and optimize items number.
   */

  function windowResizeHandler() {
    const { offset } = getMediaBreakpointData(mediaBreakpoints);

    activeItemOffset.current = offset;

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

  const touchStartHandler = (event: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const touchMoveHandler = (event: TouchEvent) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const touchEndHandler = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    const listItems = menuElementRef.current?.getElementsByTagName('li');

    if (isRightSwipe) {
      setActiveItemIndex(activeItemIndex - 1);

      scrollToElement(
        menuElementRef.current!,
        listItems?.[activeItemIndex - 1] as HTMLLIElement,
        'smooth',
        activeItemOffset.current,
      );
    } else if (isLeftSwipe) {
      setActiveItemIndex(activeItemIndex + 1);

      scrollToElement(
        menuElementRef.current!,
        listItems?.[activeItemIndex + 1] as HTMLLIElement,
        'smooth',
        activeItemOffset.current,
      );
    }
  };

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);

    const { offset } = getMediaBreakpointData(mediaBreakpoints);

    activeItemOffset.current = offset;

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
    menuElementRef.current?.addEventListener('touchstart', touchStartHandler);
    menuElementRef.current?.addEventListener('touchmove', touchMoveHandler);
    menuElementRef.current?.addEventListener('touchend', touchEndHandler);

    return () => {
      menuElementRef.current?.removeEventListener(
        'scrollend',
        scrollEndHandler,
      );
      menuElementRef.current?.removeEventListener(
        'touchstart',
        touchStartHandler,
      );
      menuElementRef.current?.removeEventListener(
        'touchmove',
        touchMoveHandler,
      );
      menuElementRef.current?.removeEventListener('touchend', touchEndHandler);
    };
  }, [activeItemIndex, touchEnd, touchStart]);

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
