'use client';

import { useEffect, useState } from 'react';

import { defaultMediaBreakpoints } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { AvaliableBreakpoints, SvgPathData } from '@/types';
import { getMediaBreakpointData } from '@/utils/helpers';

import { CMR2SVG } from './CMR2SVG';

const complexPath: SvgPathData = {
  viewBox: '0 0 589 151',
  path: `M26 69a20 20 0 0 1-10-7 18 18 0 0 1-3-11 21 21 0 0 1 7-16 26 26 0 0 1 18-6c8 0 14 2 19 7 4 4 7 9 7 16 0 4-1 7-3 10-3 3-6 6-10 7 5 2 9 5 12 9s4 9 4 14c0 8-2 14-8 19a29 29 0 0 1-21 8 29 29 0 0 1-21-8 26 26 0 0 1-8-19c0-6 1-11 4-15a22 22 0 0 1 13-8Zm-2-18c0 4 1 8 4 10 3 3 6 4 10 4s8-1 11-4a13 13 0 0 0 4-9 13 13 0 0 0-5-10 14 14 0 0 0-10-4c-4 0-7 1-10 4a12 12 0 0 0-4 9Zm-4 41 2 9 7 7 9 2a17 17 0 0 0 18-18 18 18 0 0 0-18-18 17 17 0 0 0-18 18Zm93 26V97H75V87l40-58h9v58h12v10h-12v21h-11Zm0-31V47L85 87h28Zm91 21v10h-58l1-7 7-12 14-14 20-18c3-5 5-9 5-13 0-5-1-8-5-11-3-3-7-5-12-5s-9 2-12 5a18 18 0 0 0-5 13l-11-1a28 28 0 0 1 9-19c5-5 11-7 20-7 8 0 15 2 20 7s7 11 7 18c0 3 0 7-2 10a39 39 0 0 1-7 11l-17 16a204 204 0 0 0-17 17h43Zm57 10v-10c-5 7-12 11-20 11l-11-2a18 18 0 0 1-7-6 21 21 0 0 1-3-8l-1-10V53h11v47l5 7c2 2 5 2 8 2a18 18 0 0 0 9-2 14 14 0 0 0 6-7c2-3 2-7 2-13V54h11v65h-10Zm64 0v-12h13v12h-13Zm107 0v-8c-4 6-10 9-18 9-5 0-10-1-14-4a28 28 0 0 1-10-12 45 45 0 0 1-1-35 25 25 0 0 1 35-13c3 1 5 3 7 6V29h11v89h-10Zm-35-32c0 8 2 14 6 18a16 16 0 0 0 12 6c5 0 9-2 12-6s5-10 5-18-2-15-5-19a16 16 0 0 0-25 0c-3 4-5 10-5 19Zm106 11 11 1a27 27 0 0 1-9 16 30 30 0 0 1-19 5c-9 0-17-3-22-9a34 34 0 0 1-8-24 35 35 0 0 1 8-25c5-6 13-9 22-9 8 0 15 3 21 9 5 6 8 14 8 24v3h-48a25 25 0 0 0 6 16c3 4 8 6 13 6 4 0 8-1 10-3 3-2 5-5 7-10Zm-36-18h36c0-5-2-9-4-12a17 17 0 0 0-13-6 17 17 0 0 0-13 5 19 19 0 0 0-6 13Zm79 39-24-65h11l14 39 4 13 4-12 14-40h12l-25 65h-10Z`,
  pathId: 'complex',
};

const simplePath = {
  viewBox: '0 0 589 151',
  path: 'M42 71s13 0 18-4c7-5 6-15 6-15s0-12-6-17c-7-6-20-5-20-5s-14 0-20 5c-6 6-6 17-6 17s0 10 6 15c6 4 20 3 20 3s17 0 24 5c7 6 5 19 5 19s1 14-6 19c-8 7-23 6-23 6s-15 2-22-5c-7-6-7-21-7-21s-1-12 6-18 21-5 21-5m100 23H77l45-63-1 89m29-63s0-14 7-21c7-6 22-5 22-5s14 0 21 6 6 18 6 18 3 9-7 20c-18 20-51 45-51 45h59m14-65v44s-1 11 5 16c5 5 17 5 17 5s6 1 11-1c6-3 9-9 9-9m6 10-1-65m60 53v12h11v-12h-11Zm105-45s-3-5-7-7-10-1-10-1-15-1-21 6c-8 9-6 26-6 26s-1 18 6 26 21 7 21 7 7 1 11-1c5-3 7-7 7-7m5 8V30m30 50h48s-1-14-8-21c-7-6-21-6-21-6s-16-1-23 8c-7 8-7 26-7 26s-1 16 7 25c7 8 23 8 23 8s13 0 21-6c6-5 7-17 7-17m14-43 23 65 24-65',
  pathId: 'simple',
};

export default function BazuDevSVG() {
  const [mediaBreakpointId, setMediaBreakpointId] = useState('');

  const text = '842u dev ';

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
    <div aria-hidden className="w-full flex-grow md:w-3/4">
      {mediaBreakpointId === AvaliableBreakpoints.SM ||
      mediaBreakpointId === AvaliableBreakpoints.MD ? (
        <CMR2SVG
          instantStart
          animationDuration={20}
          characterRotation="0"
          characterSpacing={0.07}
          className="h-full w-full text-[9px]"
          pathId={`${simplePath.pathId}sm`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={32}
          viewBox={simplePath.viewBox}
        />
      ) : null}
      {mediaBreakpointId === AvaliableBreakpoints.LG ? (
        <CMR2SVG
          instantStart
          animationDuration={55}
          characterRotation="0"
          characterSpacing={0.1}
          className="h-full w-full text-[5px]"
          pathId={complexPath.pathId}
          pathShape={complexPath.path}
          text={text}
          textRepetition={62}
          viewBox={complexPath.viewBox}
        />
      ) : null}
    </div>
  );
}
