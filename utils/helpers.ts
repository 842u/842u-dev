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
  if (!multiplier || multiplier === 1 || multiplier < 0) {
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

export function getSectorElementsWidth(sectorElements: Element[]) {
  const sectorWidth = sectorElements.reduce(
    (previousWidth, currentElement) =>
      previousWidth + currentElement.getBoundingClientRect().width,

    0,
  );

  return sectorWidth;
}

export function calculateSectorMultiplier(
  container: HTMLElement,
  sectorWidth: number,
) {
  const containerWidth = (container?.getBoundingClientRect().width || 0) * 5;

  const multiplier = Math.ceil(containerWidth / sectorWidth) || 0;

  return multiplier;
}
