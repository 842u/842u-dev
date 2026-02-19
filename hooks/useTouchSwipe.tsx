import { RefObject, useCallback, useEffect, useState } from 'react';

export function useTouchSwipe(
  element: RefObject<HTMLElement | null>,
  swipeDistance: number,
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const touchStartHandler = (event: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const touchMoveHandler = (event: TouchEvent) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const touchEndHandler = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > swipeDistance;
    const isRightSwipe = distance < -swipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }
  }, [onSwipeLeft, onSwipeRight, swipeDistance, touchEnd, touchStart]);

  useEffect(() => {
    const currentElement = element.current;
    currentElement?.addEventListener('touchstart', touchStartHandler);
    currentElement?.addEventListener('touchmove', touchMoveHandler);
    currentElement?.addEventListener('touchend', touchEndHandler);

    return () => {
      currentElement?.removeEventListener('touchstart', touchStartHandler);
      currentElement?.removeEventListener('touchmove', touchMoveHandler);
      currentElement?.removeEventListener('touchend', touchEndHandler);
    };
  }, [element, touchEndHandler]);
}
