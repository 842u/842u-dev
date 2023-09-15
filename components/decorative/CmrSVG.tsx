'use client';

import { useEffect } from 'react';

type CmrSVGProps = {
  text: string;
  duration: number;
  rotate: 0 | 'auto' | 'auto-reverse';
};

export function CmrSVG({ text, duration, rotate }: CmrSVGProps) {
  let pathLength: number;
  let characterWidth: number;
  let avaliableCharacters: number;
  const textLength = text.length;

  useEffect(() => {
    const pathElement = document.querySelector(
      'svg path',
    ) as SVGGeometryElement;

    const characterElement = document.querySelector('svg text') as SVGAElement;

    pathLength = pathElement.getTotalLength();
    characterWidth = characterElement.getBBox().width;

    avaliableCharacters = pathLength / characterWidth;

    console.log('path length', pathLength);
    console.log('character width', characterWidth);
    console.log('avaliable characters', avaliableCharacters);
    console.log('text length', textLength);
  });

  return (
    <div className="w-1/2">
      <svg viewBox="0 0 200 100">
        <path
          d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          fill="none"
          id="characterPath"
          stroke="lightgrey"
        />

        {text
          .split('')
          // .reverse()
          .map((character, index) => (
            <text className="fill-dark font-mono dark:fill-light">
              {character}
              <animateMotion
                begin={duration * (0.04 * index)}
                dur={`${duration}s`}
                repeatCount="indefinite"
                rotate={rotate}
              >
                <mpath href="#characterPath" />
              </animateMotion>
            </text>
          ))}
      </svg>
    </div>
  );
}
