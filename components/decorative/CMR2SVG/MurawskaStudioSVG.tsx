'use client';

import { useEffect, useState } from 'react';

import { defaultMediaBreakpoints } from '@/components/ui/HorizontalMenu/HorizontalMenu';
import { AvaliableBreakpoints, SvgPathData } from '@/types';
import { getMediaBreakpointData } from '@/utils/helpers';

import { CMR2SVG } from './CMR2SVG';

const complexPath: SvgPathData = {
  viewBox: '0 0 340 160',
  path: `M20 62V27h6v6l4-5 5-1 6 1 4 5 4-5 7-1c3 0 5 1 7 3s3 5 3 9v23h-5V39l-2-6-5-2c-3 0-5 1-6 3l-2 5v23h-5V38l-2-5-5-2-4 2-3 3-1 4v22h-6Zm78-14V27h5v35h-5v-6l-4 5-7 1-6-1-4-4-1-8V27h5v22l3 6c1 2 3 2 5 2a9 9 0 0 0 9-9Zm15 14V27h5v5h1l3-4 6-1a59 59 0 0 1 3 0v5a16 16 0 0 0-4 0l-4 1c-1 0-3 1-3 3l-1 4v22h-6Zm34 1-6-1-4-4-2-6 2-5 3-3 4-1a53 53 0 0 1 10-2l3-1 1-1v-1l-2-5-5-2-6 2-4 4-5-2a12 12 0 0 1 9-8 21 21 0 0 1 9 0l5 2 3 3 1 7v23h-5v-5l-2 3-4 2-5 1Zm1-5 5-1a9 9 0 0 0 5-8v-5l-2 1a25 25 0 0 1-5 1 144 144 0 0 0-6 1l-3 2-1 3c0 2 0 4 2 5l5 1Zm33 4-11-35h6l8 27 7-27h6l7 27h1l7-27h6l-11 35h-5l-8-27-8 27h-5Zm69-27-5 1-1-2-3-2-4-1-5 2-2 3 1 4 5 2 5 1 7 3c2 2 2 4 2 6l-1 6-5 3-7 2c-4 0-7-1-9-3-2-1-4-3-4-6l5-2 2 5 6 1 6-2 2-3-1-3-4-2-6-2c-3 0-6-2-7-3-2-2-2-4-2-6l1-5 5-4 6-1c4 0 7 0 9 2 2 1 3 3 4 6Zm14 14-1-6h2l15-16h6l-16 17-6 5Zm-5 13V15h5v47h-5Zm22 0-14-17 4-4 17 21h-7Zm23 1-6-1-5-4-1-6 1-5 3-3 4-1a53 53 0 0 1 10-2l3-1 1-1v-1c0-2 0-4-2-5l-5-2-6 2c-2 1-3 2-3 4l-5-2a12 12 0 0 1 8-8 21 21 0 0 1 10 0l4 2 3 3 2 7v23h-6v-5l-2 3-3 2-5 1Zm0-5 6-1a9 9 0 0 0 4-8v-5l-1 1a25 25 0 0 1-6 1 144 144 0 0 0-6 1l-3 2-1 3 2 5 5 1Zm-198 54-5 1-1-2-2-2-4-1-6 2-2 3 2 4 4 2 6 1 6 3 3 6-2 6-5 3-7 2-9-3c-2-1-4-3-4-6l5-2c0 2 1 4 3 5l5 1 6-2 2-3-1-3-4-2-6-2c-3 0-5-2-7-3l-2-6 2-5 4-4 7-1c3 0 6 0 8 2 2 1 3 3 4 6Zm24-8v5h-18v-5h18Zm-13-8h6v36l2 2h5l1 5a11 11 0 0 1-4 0l-5-1-3-2-2-6V96Zm43 29v-21h5v35h-5v-6l-4 5-7 1-5-1-4-4-2-8v-22h5v22l3 6c1 2 3 2 5 2a9 9 0 0 0 9-9Zm28 15a14 14 0 0 1-12-9c-2-2-2-6-2-9 0-4 0-7 2-10 1-3 3-5 5-6 2-2 5-2 8-2l5 1 3 2 2 3V92h5v47h-5v-5l-2 2-3 3-6 1Zm1-5 6-2 3-4 1-7-1-7-3-5-6-2-5 2-4 5-1 7 1 6 4 5 5 2Zm26 4v-35h5v35h-5Zm3-41-3-1-1-2 1-3 3-1 2 1 2 3-2 2-2 1Zm26 42c-3 0-6-1-8-3-2-1-4-3-5-6-2-3-2-6-2-9 0-4 0-7 2-10 1-3 3-5 5-6 2-2 5-2 8-2 4 0 6 0 9 2 2 1 4 3 5 6 2 3 2 6 2 10 0 3 0 6-2 9-1 3-3 5-5 6-3 2-5 3-9 3Zm0-5 6-2 4-5 1-6-1-7-4-5-6-2-6 2-3 5-1 7 1 6 3 5 6 2Z`,
  pathId: 'complex',
};

const simplePath = {
  viewBox: '0 0 311 142',
  path: 'M9 21v7m0 27V28m0 0c6-7 11-8 20 0m0 0v27m0-27c7-8 12-8 20 0v27m10-34v26c1 2 4 8 12 9 6 0 11-5 13-9m0 9V21m15 0v7m0 28V28m0 0c2-5 7-8 15-8m6 8c2-7 6-8 13-8 9 0 11 2 13 8v3m0 24v-7m0 0c-5 5-8 8-15 8-8 0-12-2-13-10 1-8 3-10 13-11 7 0 10 0 15-4m0 17V31m10-11 11 35 11-34 10 34 10-34m9 26c2 6 5 8 13 8 9 0 13-4 14-8 0-4-2-5-8-7l-13-4c-5-3-5-4-5-6 1-8 7-10 12-10s11 3 13 8m14-19v29m0 17V38m0 0 4-3m15-14-15 14m0 0 16 20m9-27c3-7 6-8 14-8 9 0 11 2 12 8v3m0 17v7m0-7c-4 5-7 7-14 8-9-1-13-2-13-10s3-10 13-11c6 0 10 0 14-4m0 17V31M63 124c2 7 5 8 14 8 8 0 13-4 13-8 0-3-2-5-7-7l-14-4c-5-3-4-4-5-6 1-8 8-10 13-10 4 0 10 3 12 8m6-5h18m-10-11v35c0 7 2 9 11 8m7-35v26c1 3 5 9 12 9 6 0 11-4 13-9m0 0v9m0-9V97m39-11v22m0 24v-9m0 0c-3 7-6 9-13 9-13 1-15-8-15-17 1-15 5-17 15-18 10 1 11 5 13 11m0 15v-15m16-11v35m0-40 4-4c0-2-2-4-4-4s-4 2-4 4 2 4 4 4Zm11 23c0-9 6-18 16-18 9 0 15 9 15 18s-6 18-15 18c-10 0-17-9-16-18Z',
  pathId: 'simple',
};

export default function MurawskaStudioSVG() {
  const [mediaBreakpointId, setMediaBreakpointId] = useState('');

  const text = 'murawska studio ';

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
          animationDuration={35}
          characterRotation="0"
          characterSpacing={0.09}
          className="h-full w-full text-[5px]"
          pathId={`${simplePath.pathId}sm`}
          pathShape={simplePath.path}
          text={text}
          textRepetition={25}
          viewBox={simplePath.viewBox}
        />
      ) : null}
      {mediaBreakpointId === AvaliableBreakpoints.LG ? (
        <CMR2SVG
          instantStart
          animationDuration={100}
          characterRotation="0"
          characterSpacing={0.13}
          className="h-full w-full text-[3px]"
          pathId={complexPath.pathId}
          pathShape={complexPath.path}
          text={text}
          textRepetition={48}
          viewBox={complexPath.viewBox}
        />
      ) : null}
    </div>
  );
}
