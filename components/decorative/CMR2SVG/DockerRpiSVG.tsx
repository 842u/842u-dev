import { SvgPathData } from '@/types';

import { CMR2SVG } from './CMR2SVG';

const complexPath: SvgPathData = {
  viewBox: '0 0 500 500',
  path: `M321 245c22 9 32 15 44 28m0 0v6c-2 7-8 10-16 10m16-16c4-1 6-3 8-5m-24 21c-21-1-54-24-55-53 38-23 96 15 79 32m-24 21c-34 2-43 11-46 42-22 18-24 30-9 56 1 33 10 42 32 49 7 8 12 11 23 13 14 14 19 13 30 14 11-1 17 0 31-14 11-2 16-5 23-13 22-7 31-16 32-49 14-26 13-38-10-56-2-31-12-40-45-42m28-44c-22 9-33 15-44 28m0 0v6c1 7 8 10 16 10m-16-16c-4-1-7-3-9-5m25 21c20-1 54-24 55-53-39-23-96 15-80 32m-12 0c6-3 8-3 12 0M16 143h182s10 0 14-4c-8-20-6-30 6-48 15 8 19 15 22 30 17-2 24-1 35 7-8 19-17 24-41 25-33 61-51 76-132 83-80 7-98-88-86-93Zm19-7h154v-23h-31V55h-28v27H67v31H35v23Z`,
  pathId: 'complex',
};

export default function DockerRpiSVG() {
  const text = 'docker rpi ';

  return (
    <div aria-hidden className="flex-grow">
      <CMR2SVG
        instantStart
        animationDuration={35}
        characterRotation="0"
        characterSpacing={0.08}
        className="h-full w-full text-[8px]"
        pathId={complexPath.pathId}
        pathShape={complexPath.path}
        text={text}
        textRepetition={40}
        viewBox={complexPath.viewBox}
      />
    </div>
  );
}
