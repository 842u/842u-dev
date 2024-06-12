import { ItemOffset, MediaBreakpoints, Project, ProjectData } from '@/types';

export function createSlug(text: string) {
  const segments = text
    .trim()
    .replace(/[^A-Za-z0-9\s]/g, ' ')
    .split(' ')
    .filter((part) => !!part);

  const lowerCaseParts = segments.map((part) => part.toLocaleLowerCase());

  const slug = lowerCaseParts.join('-');

  return slug;
}

export function extendArray<T>(array: T[], multiplier: number): T[] {
  if (
    !multiplier ||
    multiplier === 1 ||
    multiplier < 0 ||
    !Number.isFinite(multiplier)
  ) {
    return [...array];
  }

  const fillArray = Array(multiplier).fill(array);

  const extendedArray = fillArray.flat(Infinity);

  return extendedArray;
}

export function createProject(
  data: ProjectData,
  localReadme?: string,
): Project {
  const slug = createSlug(data.name);

  return { ...data, slug, localReadme };
}

export function scrollToElement(
  container: HTMLElement,
  item: Element,
  behavior: 'smooth' | 'instant',
  offset: ItemOffset,
) {
  if (typeof offset === 'number') {
    const itemXPosition = item?.getBoundingClientRect().x || 0;
    const containerXPosition = container?.getBoundingClientRect().x || 0;
    const itemLeftOffset = itemXPosition - (offset || 0) - containerXPosition;

    container.scrollBy({
      behavior,
      left: itemLeftOffset,
    });
  } else if (offset === 'center') {
    const itemXPosition = item?.getBoundingClientRect().x || 0;
    const itemWidth = item?.getBoundingClientRect().width || 0;

    const containerWidth = container?.getBoundingClientRect().width || 0;
    const containerXPosition = container?.getBoundingClientRect().x || 0;

    container.scrollBy({
      behavior,
      left:
        itemXPosition - containerWidth / 2 + itemWidth / 2 - containerXPosition,
    });
  }
}

export function getChildElements(container: HTMLElement) {
  return Array.from(container.children || []);
}

export function getContainerElementsArray(
  container: HTMLElement,
  querySelector: string,
) {
  const itemsElementsNodeList = container.querySelectorAll(querySelector);

  const itemsElementsArray = Array.from(itemsElementsNodeList);

  return itemsElementsArray;
}

export function getMediaBreakpointData(mediaBreakpoints: MediaBreakpoints) {
  const windowWidth = window.innerWidth;

  if (windowWidth <= mediaBreakpoints.SM.minWidth) {
    return mediaBreakpoints.SM;
  }

  if (
    windowWidth <= mediaBreakpoints.LG.minWidth &&
    windowWidth >= mediaBreakpoints.MD.minWidth
  ) {
    return mediaBreakpoints.MD;
  }

  if (windowWidth >= mediaBreakpoints.LG.minWidth) {
    return mediaBreakpoints.LG;
  }

  return mediaBreakpoints.SM;
}

export function calculateSectorElementsWidth(sectorElements: Element[]) {
  const sectorWidth = sectorElements.reduce(
    (previousWidth, currentElement) =>
      previousWidth + currentElement.getBoundingClientRect().width,

    0,
  );

  return sectorWidth;
}

export function calculateMiddleIndex(
  elements: Element[],
  baseElementsCount: number,
) {
  const totalSectors = elements.length / baseElementsCount;

  const middleSector = Math.floor(totalSectors / 2);

  return middleSector * baseElementsCount;
}

export function calculateIndexOffset(
  currentIndex: number,
  baseElementsCount: number,
) {
  const sectorIndex = Math.floor(currentIndex / baseElementsCount) || 0;
  const sectorStartIndex = sectorIndex * baseElementsCount || 0;

  return currentIndex - sectorStartIndex;
}

export function fillContainerWithElements(
  container: HTMLElement,
  elements: Element[],
  multiplier: number,
) {
  while (container?.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (let i = 0; i < multiplier; i++) {
    elements.forEach((element) => {
      const clone = element.cloneNode(true);
      container?.appendChild(clone);
    });
  }
}

export function calculateSectorMultiplier(
  container: HTMLElement,
  sectorWidth: number,
) {
  const containerWidthMultiplier = 5;

  const containerWidth = container?.getBoundingClientRect().width || 0;

  const multiplier =
    Math.ceil((containerWidth * containerWidthMultiplier) / sectorWidth) || 0;

  return multiplier;
}

// eslint-disable-next-line
export function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
) {
  let wait = false;
  let storedArgs: Parameters<T> | null = null;

  function checkStoredArgs() {
    if (storedArgs == null) {
      wait = false;
    } else {
      callback(...storedArgs);
      storedArgs = null;
      setTimeout(checkStoredArgs, delay);
    }
  }

  return (...args: Parameters<T>) => {
    if (wait) {
      storedArgs = args;
      return;
    }

    callback(...args);
    wait = true;
    setTimeout(checkStoredArgs, delay);
  };
}

export function removeFromClassList(element: Element, className: string) {
  if (element?.classList.contains(className)) {
    element?.classList.remove(className);
  }
}

export function addToClassList(element: Element, className: string) {
  if (!element?.classList.contains(className)) {
    element?.classList.add(className);
  }
}
