import { RefObject, useEffect, useState } from 'react';

export function useTouchSwipe(
  element: RefObject<HTMLElement>,
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

  const touchEndHandler = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > swipeDistance;
    const isRightSwipe = distance < -swipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }
  };

  useEffect(() => {
    element.current?.addEventListener('touchstart', touchStartHandler);
    element.current?.addEventListener('touchmove', touchMoveHandler);
    element.current?.addEventListener('touchend', touchEndHandler);

    return () => {
      element.current?.removeEventListener('touchstart', touchStartHandler);
      element.current?.removeEventListener('touchmove', touchMoveHandler);
      element.current?.removeEventListener('touchend', touchEndHandler);
    };
  }, [element, touchStart, touchEnd]);
}
