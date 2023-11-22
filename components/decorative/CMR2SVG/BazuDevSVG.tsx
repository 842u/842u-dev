'use client';

import { useEffect, useState } from 'react';

import { defaultMediaBreakpoints } from '@/components/ui/HorizontalMenu/HorizontalMenu';

import { CMR2SVG } from './CMR2SVG';

const complexPath = {
  viewBox: '0 0 292 57',
  path: `M11 27.1c-2.3-.8-4-2-5-3.6a9.8 9.8 0 0 1-1.7-5.7c0-3.3 1.2-6.1 3.5-8.4C10 7.1 13.2 6 17 6c3.8 0 7 1.2 9.3 3.5 2.4 2.3 3.5 5.1 3.5 8.4 0 2.2-.5 4-1.6 5.6a9.3 9.3 0 0 1-4.9 3.6c2.7.9 4.8 2.3 6.2 4.3 1.4 2 2.1 4.4 2.1 7.1 0 3.8-1.3 7-4 9.6A14.6 14.6 0 0 1 17.1 52c-4.4 0-7.9-1.3-10.6-3.9a13 13 0 0 1-4-9.7c0-3 .7-5.3 2.2-7.3a11 11 0 0 1 6.2-4Zm-1.1-9.5c0 2.1.7 4 2 5.3a7 7 0 0 0 5.3 2.1 7 7 0 0 0 7.1-7.1c0-2.1-.7-3.9-2-5.3a7 7 0 0 0-5.2-2.1 7 7 0 0 0-7.2 7ZM8 38.4c0 1.6.4 3 1.1 4.5a7.8 7.8 0 0 0 3.3 3.4c1.5.8 3 1.2 4.7 1.2a8.6 8.6 0 0 0 9-9c0-2.5-.9-4.7-2.6-6.4a9 9 0 0 0-6.6-2.6 9 9 0 0 0-6.4 2.5A8.7 8.7 0 0 0 8 38.4ZM54 51V40H34.8v-5L55 6h4.4v29h6v5h-6v11H54Zm0-16V14.8L40 35h14Zm45.1 10.8V51H70c0-1.3.1-2.6.6-3.8.8-2 2-4 3.6-6s4-4.2 7.1-6.8c4.8-4 8.1-7.1 9.8-9.5 1.7-2.3 2.5-4.5 2.5-6.6 0-2.2-.7-4-2.3-5.6a8.3 8.3 0 0 0-6-2.2c-2.6 0-4.7.8-6.3 2.5a10 10 0 0 0-2.4 7l-5.6-.6c.4-4.4 1.8-7.7 4.3-10S81.1 6 85.3 6a14 14 0 0 1 10.1 3.6c2.5 2.3 3.8 5.3 3.8 8.8a14 14 0 0 1-1.1 5.3c-.8 1.8-2 3.6-3.7 5.5A90.2 90.2 0 0 1 86 37a93.6 93.6 0 0 0-6.3 5.6c-.9 1-1.7 2-2.3 3h21.8Zm28 5.2v-5.5c-2.5 3.7-6 5.5-10.3 5.5a13 13 0 0 1-5.3-1 8.8 8.8 0 0 1-3.6-2.8c-.8-1.2-1.4-2.5-1.7-4.1a28 28 0 0 1-.3-5.1V18h5.4v17.9c0 2.8.1 4.8.3 5.7a5.8 5.8 0 0 0 2.2 3.4 7 7 0 0 0 4.1 1.3c1.7 0 3.2-.5 4.6-1.3a7 7 0 0 0 3-3.4c.7-1.5 1-3.6 1-6.3V18h5.4v33h-4.8Zm31.4 0v-6h6.2v6h-6.2Zm53.3 0v-4c-2 2.6-5 4-9 4-2.5 0-4.9-.7-7-2a13.7 13.7 0 0 1-5-5.9 22.3 22.3 0 0 1-.2-17.2 12.5 12.5 0 0 1 12-7.9 10.8 10.8 0 0 1 8.9 4.6V6h5.4v45h-5Zm-17.2-16.5c0 4 .9 7 2.6 9a8 8 0 0 0 6.2 3 8 8 0 0 0 6-2.8c1.7-2 2.5-4.9 2.5-8.8 0-4.2-.8-7.4-2.5-9.4s-3.8-3-6.3-3c-2.4 0-4.4 1-6 2.9-1.7 2-2.5 5-2.5 9.1ZM247 40l5.6.7c-.9 3.3-2.5 5.8-5 7.6a14.9 14.9 0 0 1-9.1 2.7c-4.7 0-8.4-1.4-11.2-4.3a16.5 16.5 0 0 1-4.1-12c0-5.3 1.4-9.4 4.1-12.3 2.8-3 6.4-4.4 10.9-4.4 4.3 0 7.8 1.4 10.5 4.3 2.7 3 4.1 7 4.1 12.3V36h-24c.2 3.4 1.2 6 3 7.8a9 9 0 0 0 6.7 2.7c2 0 3.7-.5 5.1-1.5 1.5-1 2.6-2.7 3.4-5Zm-17.9-8.5h18c-.3-2.6-1-4.6-2.1-6-1.7-2-4-3-6.8-3-2.5 0-4.6.8-6.3 2.4a9.6 9.6 0 0 0-2.8 6.6ZM268 51l-12.2-33h5.8l6.8 19.9c.8 2.1 1.5 4.4 2.1 6.7l2-6.3 7.2-20.3h5.6L273 51h-5Z`,
  pathId: 'complex',
};

const simplePath = {
  viewBox: '0 0 589 151',
  path: 'M41.5 70.5s13.2.3 18.9-3.9c6.3-4.7 5.2-14.1 5.2-14.1S66 40.2 60 34.9c-6.7-5.7-20-4.4-20-4.4s-13.7-.4-19.9 4.6C13.6 40.7 14.4 52 14.4 52s-.8 10 5.6 14.8c6.2 4.5 19.8 3.6 19.8 3.6s16.8-.8 24 5c7.4 5.9 5.2 18.2 5.2 18.2s.6 14-5.7 19.7c-7.9 7-22.9 6-22.9 6s-15 1.9-22.5-5c-7.3-6.5-6.9-21.7-6.9-21.7s-.5-12 6.5-17.7c6.7-5.4 20.9-4.5 20.9-4.5m99.4 23.1H76.7L121.5 30l-.8 88.9M150.3 56s-.7-14.4 6.8-21.2c6.7-6.1 21.7-4.6 21.7-4.6s14.1-.5 21 5.6c6.9 5.9 6.4 18.4 6.4 18.4s2.3 9.3-7.7 20.3c-17.2 19-50.8 44.3-50.8 44.3l59 .2m14.5-65v43.6s-1 11 4.8 16.8c5 5 16.7 4.8 16.7 4.8s6.7 1.1 11.4-1.3c5.4-2.8 8.9-9.2 8.9-9.2m5.5 10.2-.5-65m60 53.1v12h11v-12h-11Zm104.6-45s-2.2-4.9-6.6-7c-4.1-2.2-10.4-1.5-10.4-1.5s-14.8-.6-21 6.9c-7.2 8.8-6 26-6 26s-.8 17.1 6.2 25.6c6.7 8 21 7.4 21 7.4s6.8.3 11.1-1.8c4.6-2.2 6.7-6.7 6.7-6.7m5.7 8-.5-88.9m30 50h47.8s-.5-14-8.1-21c-6.9-6.4-20.8-5.7-20.8-5.7s-15.2-.9-23 7.8c-7 8-6.8 25.7-6.8 25.7s-.8 16.5 6.9 24.8c7.4 8 23.3 8 23.3 8s13.1.5 20.5-5.3c6.7-5.2 7.6-16.8 7.6-16.8M530 53.9l22.9 65.1 24.5-65',
  pathId: 'simple',
};

export default function BazuDevSVG() {
  const [mediaBreakpoint, setMediaBreakpoint] = useState('');

  function windowResizeHandler() {
    if (window.innerWidth >= defaultMediaBreakpoints.lg.minWidth) {
      setMediaBreakpoint('lg');
    } else if (
      window.innerWidth <= defaultMediaBreakpoints.lg.minWidth &&
      window.innerWidth >= defaultMediaBreakpoints.md.minWidth
    ) {
      setMediaBreakpoint('md');
    } else if (window.innerWidth <= defaultMediaBreakpoints.sm.minWidth) {
      setMediaBreakpoint('sm');
    }
  }

  useEffect(() => {
    windowResizeHandler();

    window.addEventListener('resize', windowResizeHandler);

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  const text = '842u.dev ';

  return (
    <div className="aspect-[589/151] lg:aspect-[292/57]">
      {mediaBreakpoint === 'sm' ? (
        <CMR2SVG
          animationDuration={10}
          characterRotation="0"
          characterSpacing={0.1}
          className="fill-light-darker text-base dark:text-dark-lighter md:hidden lg:hidden"
          pathId={`${simplePath.pathId}sm`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={12}
          viewBox={simplePath.viewBox}
        />
      ) : null}

      {mediaBreakpoint === 'md' ? (
        <CMR2SVG
          animationDuration={10}
          characterRotation="0"
          characterSpacing={0.08}
          className="hidden fill-light-darker text-xs dark:text-dark-lighter md:block lg:hidden"
          pathId={`${simplePath.pathId}md`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={14}
          viewBox={simplePath.viewBox}
        />
      ) : null}
      {mediaBreakpoint === 'lg' ? (
        <CMR2SVG
          animationDuration={30}
          characterRotation="0"
          characterSpacing={0.08}
          className="hidden fill-light-darker text-[3px] dark:text-dark-lighter md:hidden lg:block"
          pathId={complexPath.pathId}
          pathShape={complexPath.path}
          text={text}
          textRepetition={42}
          viewBox={complexPath.viewBox}
        />
      ) : null}
    </div>
  );
}
