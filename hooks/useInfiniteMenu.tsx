import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { ItemOffset, MediaBreakpoints } from '@/types';
import {
  addToClassList,
  calculateIndexOffset,
  calculateMiddleIndex,
  calculateSectorElementsWidth,
  calculateSectorMultiplier,
  fillContainerWithElements,
  getChildElements,
  getMediaBreakpointData,
  removeFromClassList,
  scrollToElement,
  throttle,
} from '@/utils/helpers';

export function useInfiniteMenu(
  menuElement: React.RefObject<HTMLMenuElement | null>,
  mediaBreakpoints: MediaBreakpoints,
) {
  const [activeElementIndex, setActiveElementIndex] = useState(0);

  const isInitialized = useRef(false);
  const initialMenuElementsCount = useRef(0);
  const activeItemPositionOffset = useRef<ItemOffset>(0);
  const middleIndex = useRef(0);
  const offsetFromMiddleIndex = useRef(0);
  const previousActiveElement = useRef<Element | null>(null);
  const currentActiveElement = useRef<Element | null>(null);

  const scrollEndHandler = useCallback(() => {
    const menuElements = getChildElements(menuElement.current!);

    offsetFromMiddleIndex.current = calculateIndexOffset(
      menuElements.indexOf(currentActiveElement.current!),
      initialMenuElementsCount.current,
    );

    previousActiveElement.current = currentActiveElement.current;
    if (previousActiveElement.current)
      removeFromClassList(previousActiveElement.current, 'operational');

    currentActiveElement.current =
      menuElements[middleIndex.current + offsetFromMiddleIndex.current];
    addToClassList(currentActiveElement.current, 'operational');

    scrollToElement(
      menuElement.current!,
      currentActiveElement.current,
      'instant',
      activeItemPositionOffset.current,
    );

    setActiveElementIndex(offsetFromMiddleIndex.current);
  }, [menuElement]);

  const elementClickHandler = useCallback(
    (event: Event) => {
      event.stopPropagation();

      if (!(event.currentTarget instanceof HTMLElement)) return;

      previousActiveElement.current = currentActiveElement.current;
      if (previousActiveElement.current)
        removeFromClassList(previousActiveElement.current, 'operational');

      currentActiveElement.current = event.currentTarget;
      addToClassList(currentActiveElement.current, 'operational');

      scrollToElement(
        menuElement.current!,
        event.currentTarget,
        'smooth',
        activeItemPositionOffset.current,
      );
    },
    [menuElement],
  );

  const elementKeyDownHandler = useCallback(
    (event: Event) => {
      if (
        event instanceof KeyboardEvent &&
        (event.key === ' ' || event.key === 'Enter')
      ) {
        elementClickHandler(event);
      }
    },
    [elementClickHandler],
  );

  function windowResizeHandler() {
    const { offset } = getMediaBreakpointData(mediaBreakpoints);
    activeItemPositionOffset.current = offset;

    const menuElements = getChildElements(menuElement.current!);
    menuElements.length = initialMenuElementsCount.current;

    const sectorWidth = calculateSectorElementsWidth(menuElements);
    const multiplier = calculateSectorMultiplier(
      menuElement.current!,
      sectorWidth,
    );

    fillContainerWithElements(menuElement.current!, menuElements, multiplier);

    const newElements = getChildElements(menuElement.current!);
    middleIndex.current = calculateMiddleIndex(
      newElements,
      initialMenuElementsCount.current,
    );

    newElements.forEach((element) => {
      element.addEventListener('click', elementClickHandler);
      element.addEventListener('keydown', elementKeyDownHandler);
    });

    currentActiveElement.current = newElements[middleIndex.current];
    addToClassList(currentActiveElement.current, 'operational');

    scrollToElement(
      menuElement.current!,
      currentActiveElement.current,
      'instant',
      activeItemPositionOffset.current,
    );
  }

  const throttledWindowResizeHandler = throttle(windowResizeHandler, 150);

  function activeNextItem() {
    const menuElements = getChildElements(menuElement.current!);

    middleIndex.current = calculateMiddleIndex(
      menuElements,
      initialMenuElementsCount.current,
    );

    previousActiveElement.current = currentActiveElement.current;
    if (previousActiveElement.current)
      removeFromClassList(previousActiveElement.current, 'operational');

    currentActiveElement.current =
      menuElements[middleIndex.current + offsetFromMiddleIndex.current + 1];
    addToClassList(currentActiveElement.current, 'operational');

    scrollToElement(
      menuElement.current!,
      currentActiveElement.current,
      'smooth',
      activeItemPositionOffset.current,
    );
  }

  function activePreviousItem() {
    const menuElements = getChildElements(menuElement.current!);

    middleIndex.current = calculateMiddleIndex(
      menuElements,
      initialMenuElementsCount.current,
    );

    previousActiveElement.current = currentActiveElement.current;
    if (previousActiveElement.current)
      removeFromClassList(previousActiveElement.current, 'operational');

    currentActiveElement.current =
      menuElements[middleIndex.current + offsetFromMiddleIndex.current - 1];
    addToClassList(currentActiveElement.current, 'operational');

    scrollToElement(
      menuElement.current!,
      currentActiveElement.current,
      'smooth',
      activeItemPositionOffset.current,
    );
  }

  useLayoutEffect(() => {
    if (isInitialized.current) return;

    const { offset } = getMediaBreakpointData(mediaBreakpoints);
    activeItemPositionOffset.current = offset;

    const initialMenuElements = getChildElements(menuElement.current!);
    initialMenuElementsCount.current = initialMenuElements.length;

    const sectorWidth = calculateSectorElementsWidth(initialMenuElements);
    const multiplier = calculateSectorMultiplier(
      menuElement.current!,
      sectorWidth,
    );

    fillContainerWithElements(
      menuElement.current!,
      initialMenuElements,
      multiplier,
    );

    isInitialized.current = true;
  }, [mediaBreakpoints, menuElement]);

  useEffect(() => {
    const menuElements = getChildElements(menuElement.current!);
    middleIndex.current = calculateMiddleIndex(
      menuElements,
      initialMenuElementsCount.current,
    );

    menuElements.forEach((element) => {
      element.addEventListener('click', elementClickHandler);
      element.addEventListener('keydown', elementKeyDownHandler);
    });

    currentActiveElement.current = menuElements[middleIndex.current];
    addToClassList(currentActiveElement.current, 'operational');

    menuElements.forEach((element, index) => {
      if (
        index >= middleIndex.current &&
        index < middleIndex.current + initialMenuElementsCount.current
      ) {
        element.setAttribute('tabindex', '0');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });

    scrollToElement(
      menuElement.current!,
      currentActiveElement.current,
      'instant',
      activeItemPositionOffset.current,
    );
  }, [elementClickHandler, elementKeyDownHandler, menuElement]);

  useEffect(() => {
    window.addEventListener('resize', throttledWindowResizeHandler);

    const currentMenuElement = menuElement.current;

    currentMenuElement?.addEventListener('scrollend', scrollEndHandler);

    return () => {
      window.removeEventListener('resize', throttledWindowResizeHandler);

      currentMenuElement?.removeEventListener('scrollend', scrollEndHandler);
    };
  }, [menuElement, throttledWindowResizeHandler, scrollEndHandler]);

  return {
    activeElementIndex,
    activeNextItem,
    activePreviousItem,
  };
}
