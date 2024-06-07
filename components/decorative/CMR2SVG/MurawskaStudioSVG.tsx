import { SvgPathData } from '@/types';

import { CMR2SVG } from './CMR2SVG';

const path: SvgPathData = {
  viewBox: '0 0 201 201',
  path: `M101 196a95 95 0 1 0 0-190 95 95 0 0 0 0 190ZM59 53H40v84h11V73h1l9 64h11l10-64v64h13V53H76l-9 60-8-60Zm58 71h-12v13h12v-13Zm13 9c3 3 8 5 14 5 7 0 12-2 15-5 4-4 5-9 5-16 0-5-1-10-3-14s-6-8-11-13c-5-4-8-7-9-10-2-2-3-5-3-8 0-6 3-8 7-8 2 0 4 0 5 2l2 6v4h12v-3c0-7-2-12-5-16-3-3-8-5-14-5-7 0-11 2-15 5-3 4-5 9-5 16 0 5 1 9 3 13 3 4 6 8 12 13l9 10 2 9-2 6c-1 2-3 2-5 2-4 0-7-3-7-8v-6h-12v5c0 7 2 12 5 16Z`,
  pathId: 'complex',
};

export default function MurawskaStudioSVG() {
  const text = 'murawska studio ';

  return (
    <div aria-hidden className="h-full flex-grow">
      <CMR2SVG
        instantStart
        animationDuration={40}
        characterRotation="0"
        characterSpacing={0.07}
        className="h-full w-full py-10 text-[3.5px]"
        pathId={path.pathId}
        pathShape={path.path}
        text={text}
        textRepetition={36}
        viewBox={path.viewBox}
      />
    </div>
  );
}
