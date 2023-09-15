'use client';

import { useEffect } from 'react';

type CmrSVGProps = {
  text: string;
  duration: number;
  rotate: 0 | 'auto' | 'auto-reverse';
};

export function CmrSVG({ text, duration, rotate }: CmrSVGProps) {
  useEffect(() => {
    const path = document.querySelector('svg path') as SVGGeometryElement;
    const total = path.getTotalLength();
    console.log(total);
  });
  return (
    <div className="w-1/2">
      <svg viewBox="0 0 200 100">
        <path
          d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          direction="rtl"
          fill="none"
          id="characterPath"
          stroke="lightgrey"
        />

        {text
          .split('')
          .reverse()
          .map((character, index) => (
            <text className="bg-dark fill-dark dark:bg-light dark:fill-light">
              {character}
              <animateMotion
                begin={duration * (0.04 * index)}
                dur={`${duration}s`}
                repeatCount="indefinite"
                rotate={rotate}
                textAnchor="middle"
              >
                <mpath href="#characterPath" />
              </animateMotion>
            </text>
          ))}
      </svg>
    </div>
  );
}
