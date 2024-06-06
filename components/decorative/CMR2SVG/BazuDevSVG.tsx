'use client';

import { useEffect, useState } from 'react';

import { defaultMediaBreakpoints } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { AvaliableBreakpoints, SvgPathData } from '@/types';
import { getMediaBreakpointData } from '@/utils/helpers';

import { CMR2SVG } from './CMR2SVG';

const complexPath: SvgPathData = {
  viewBox: '0 0 589 151',
  path: `M26 69.2a20 20 0 0 1-10.1-7 18 18 0 0 1-3.3-10.8 21 21 0 0 1 7-16A26.1 26.1 0 0 1 38 29c7.7 0 14 2.2 18.7 6.6 4.7 4.4 7 9.8 7 16.1 0 4-1 7.6-3.2 10.6-2.1 3-5.4 5.3-9.8 7 5.5 1.7 9.6 4.6 12.5 8.5 2.8 4 4.2 8.7 4.2 14.3 0 7.6-2.7 14-8 19.1a29.2 29.2 0 0 1-21.2 7.8 29 29 0 0 1-21.2-7.8 26 26 0 0 1-8-19.5c0-5.8 1.4-10.6 4.3-14.5a22 22 0 0 1 12.5-8Zm-2.3-18c0 4 1.4 7.3 4.1 10C30.5 63.6 34 65 38.3 65c4.2 0 7.7-1.3 10.4-3.8a13 13 0 0 0 4-9.5 13 13 0 0 0-4.2-9.7 14 14 0 0 0-10.3-4c-4.2 0-7.6 1.3-10.4 3.9a12.3 12.3 0 0 0-4 9.2Zm-3.5 40.6c0 3.1.8 6.2 2.2 9 1.5 3 3.7 5.2 6.6 6.8 3 1.6 6 2.4 9.4 2.4a17.2 17.2 0 0 0 18-17.8A18 18 0 0 0 38 74a17.3 17.3 0 0 0-17.8 17.8Zm92.9 26.2V97H74.6V87L115 29h8.9v58h12v10h-12v21h-11Zm0-31V46.6L85.3 87h27.8Zm91.3 20.8V118h-58.7c0-2.6.4-5.1 1.3-7.5 1.5-4 4-8 7.2-11.8 3.3-3.8 8-8.3 14.3-13.3 9.6-8 16.1-14.2 19.5-18.9 3.4-4.6 5.1-9 5.1-13 0-4.4-1.5-8-4.6-11-3.1-3-7.1-4.5-12.1-4.5-5.3 0-9.5 1.6-12.6 4.8A18.1 18.1 0 0 0 159 56l-11.2-1.2a28 28 0 0 1 8.7-19.2c5-4.4 11.7-6.6 20.1-6.6 8.6 0 15.3 2.4 20.2 7 5 4.8 7.5 10.7 7.5 17.7 0 3.5-.7 7-2.2 10.5a39 39 0 0 1-7.2 10.8c-3.4 3.8-9 9-16.8 15.6-6.5 5.5-10.8 9.3-12.6 11.2-1.9 2-3.4 4-4.6 6h43.5Zm57 10.2v-10c-5 7.3-11.9 11-20.5 11-3.8 0-7.3-.7-10.6-2.2a17.5 17.5 0 0 1-7.4-5.5 21.2 21.2 0 0 1-3.3-8.1c-.4-2.1-.7-5.5-.7-10.2V53h11v35.8c0 5.7.2 9.5.6 11.5.7 2.9 2.1 5.1 4.4 6.8 2.2 1.6 5 2.4 8.2 2.4a18 18 0 0 0 9.2-2.5 14 14 0 0 0 6-6.9c1.3-2.9 1.9-7 1.9-12.6V53H271v65h-9.8Zm63.9 0v-12h12.4v12h-12.4Zm106.6 0v-8.1c-4 6-10 9.1-18 9.1-5.1 0-9.8-1.4-14.1-4.2a27.8 27.8 0 0 1-10-11.8 45.4 45.4 0 0 1-.3-34.8 25.3 25.3 0 0 1 34.3-13.7c3 1.7 5.5 3.9 7.4 6.6V29H442v89h-10.1Zm-34.5-32.5c0 8.2 1.8 14.4 5.2 18.4a16 16 0 0 0 12.3 6.1c4.8 0 8.8-2 12.2-5.8 3.3-3.9 5-9.8 5-17.8 0-8.7-1.7-15.2-5.1-19.2a15.6 15.6 0 0 0-24.7-.3c-3.2 4-4.9 10.1-4.9 18.6ZM503.2 97l11.3 1.4a27.1 27.1 0 0 1-10 15.2 29.5 29.5 0 0 1-18.3 5.4c-9.4 0-16.9-2.9-22.4-8.7a33.8 33.8 0 0 1-8.3-24.3 35 35 0 0 1 8.4-25c5.6-6 12.8-9 21.7-9 8.6 0 15.6 2.9 21 8.7 5.5 5.8 8.2 14 8.2 24.4V88h-48a25 25 0 0 0 6 16.3c3.6 3.8 8 5.7 13.4 5.7 4 0 7.4-1 10.3-3 2.8-2.2 5-5.5 6.7-10Zm-35.8-18h36c-.6-5.3-2-9.2-4.2-11.9a17 17 0 0 0-13.5-6.1 17 17 0 0 0-12.6 5 19.1 19.1 0 0 0-5.7 13Zm78.6 39-24.4-65H533l13.8 39c1.5 4.2 2.9 8.6 4.1 13.2 1-3.5 2.3-7.6 4-12.4L569.4 53h11.3l-24.4 65H546Z`,
  pathId: 'complex',
};

const simplePath = {
  viewBox: '0 0 589 151',
  path: 'M41.5 70.5s13.2.3 18.9-3.9c6.3-4.7 5.2-14.1 5.2-14.1S66 40.2 60 34.9c-6.7-5.7-20-4.4-20-4.4s-13.7-.4-19.9 4.6C13.6 40.7 14.4 52 14.4 52s-.8 10 5.6 14.8c6.2 4.5 19.8 3.6 19.8 3.6s16.8-.8 24 5c7.4 5.9 5.2 18.2 5.2 18.2s.6 14-5.7 19.7c-7.9 7-22.9 6-22.9 6s-15 1.9-22.5-5c-7.3-6.5-6.9-21.7-6.9-21.7s-.5-12 6.5-17.7c6.7-5.4 20.9-4.5 20.9-4.5m99.4 23.1H76.7L121.5 30l-.8 88.9M150.3 56s-.7-14.4 6.8-21.2c6.7-6.1 21.7-4.6 21.7-4.6s14.1-.5 21 5.6c6.9 5.9 6.4 18.4 6.4 18.4s2.3 9.3-7.7 20.3c-17.2 19-50.8 44.3-50.8 44.3l59 .2m14.5-65v43.6s-1 11 4.8 16.8c5 5 16.7 4.8 16.7 4.8s6.7 1.1 11.4-1.3c5.4-2.8 8.9-9.2 8.9-9.2m5.5 10.2-.5-65m60 53.1v12h11v-12h-11Zm104.6-45s-2.2-4.9-6.6-7c-4.1-2.2-10.4-1.5-10.4-1.5s-14.8-.6-21 6.9c-7.2 8.8-6 26-6 26s-.8 17.1 6.2 25.6c6.7 8 21 7.4 21 7.4s6.8.3 11.1-1.8c4.6-2.2 6.7-6.7 6.7-6.7m5.7 8-.5-88.9m30 50h47.8s-.5-14-8.1-21c-6.9-6.4-20.8-5.7-20.8-5.7s-15.2-.9-23 7.8c-7 8-6.8 25.7-6.8 25.7s-.8 16.5 6.9 24.8c7.4 8 23.3 8 23.3 8s13.1.5 20.5-5.3c6.7-5.2 7.6-16.8 7.6-16.8M530 53.9l22.9 65.1 24.5-65',
  pathId: 'simple',
};

export default function BazuDevSVG() {
  const [mediaBreakpointId, setMediaBreakpointId] = useState('');

  const text = '842u.dev ';

  function windowResizeHandler() {
    const { id } = getMediaBreakpointData(defaultMediaBreakpoints);

    setMediaBreakpointId(id);
  }

  useEffect(() => {
    window.addEventListener('resize', windowResizeHandler);

    const { id } = getMediaBreakpointData(defaultMediaBreakpoints);

    setMediaBreakpointId(id);

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  return (
    <div aria-hidden className="mx-auto flex-grow">
      {mediaBreakpointId === AvaliableBreakpoints.SM ||
      mediaBreakpointId === AvaliableBreakpoints.MD ? (
        <CMR2SVG
          instantStart
          animationDuration={10}
          characterRotation="0"
          characterSpacing={0.08}
          className="h-full w-full fill-dark-lighter text-xs dark:fill-light-darker"
          pathId={`${simplePath.pathId}sm`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={14}
          viewBox={simplePath.viewBox}
        />
      ) : null}
      {mediaBreakpointId === AvaliableBreakpoints.LG ? (
        <CMR2SVG
          instantStart
          animationDuration={35}
          characterRotation="0"
          characterSpacing={0.08}
          className="h-full w-full fill-dark-lighter text-[5px] dark:fill-light-darker"
          pathId={complexPath.pathId}
          pathShape={complexPath.path}
          text={text}
          textRepetition={49}
          viewBox={complexPath.viewBox}
        />
      ) : null}
    </div>
  );
}
