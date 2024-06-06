import { twMerge } from 'tailwind-merge';

import { SvgPathData } from '@/types';

import { CMR2SVG } from './CMR2SVG';

export const pathData: SvgPathData = {
  viewBox: '0 0 200 200',
  path: `M 51.12,129.75
  C 68.34,159.39 99.36,184.91 99.36,184.91
    99.36,184.91 133.65,156.87 151.00,126.25
    166.21,99.41 164.75,66.00 164.75,66.00
    164.75,66.00 162.28,41.73 145.75,27.75
    129.92,14.37 100.00,14.75 100.00,14.75
    100.00,14.75 69.21,13.95 52.75,28.00
    35.96,42.33 34.62,68.50 34.62,68.50
    34.62,68.50 35.48,102.82 51.12,129.75 Z
  M 72.06,141.81
  C 72.06,141.81 85.86,159.56 99.44,159.56
    113.54,159.56 127.44,141.81 127.44,141.81M 64.88,144.88
  C 64.88,144.88 69.66,144.25 72.06,141.88
    74.74,139.23 75.06,134.81 75.06,134.81M 124.69,134.56
  C 124.69,134.56 125.13,139.61 127.50,142.12
    130.00,144.79 134.44,144.94 134.44,144.94M 60.00,115.38
  C 70.97,124.94 90.50,126.19 90.50,126.19
    90.50,126.19 89.21,107.56 78.25,98.00
    67.79,88.88 47.62,88.81 47.62,88.81
    47.62,88.81 49.55,106.26 60.00,115.38 Z
  M 138.06,117.12
  C 127.59,126.22 108.50,126.29 108.38,126.31
    108.38,126.31 109.65,107.59 120.55,98.00
    130.91,88.87 151.09,88.91 151.09,88.91
    151.20,88.88 148.97,107.65 138.06,117.12 Z`,
  pathId: 'alienated',
};

type AlienatedSVGProps = {
  className?: string;
};

export function AlienatedSVG({ className }: AlienatedSVGProps) {
  return (
    <CMR2SVG
      instantStart
      animationDuration={15}
      characterRotation="0"
      characterSpacing={0.09}
      className={twMerge(
        'fill-dark-lighter text-[5px] dark:fill-light-darker',
        className,
      )}
      pathId={pathData.pathId}
      pathShape={pathData.path}
      text="kamil bażanow "
      textRepetition={12}
      viewBox={pathData.viewBox}
    />
  );
}
