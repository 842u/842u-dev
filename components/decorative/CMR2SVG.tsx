/* eslint react/no-array-index-key:0 */

'use client';

/*
 * Component that simulates Collin McRae Rally 2.0 main menu icons.
 * https://www.youtube.com/watch?v=EgmbAs_qmY8&ab_channel=Boo.E.Eng
 * Pass <path> "d" parameter as pathShape prop.
 * animationSpeed => bigger number = slower animation
 */

type CMR2SVGProps = {
  text: string;
  animationSpeed: number;
  characterSpacing: number;
  characterRotation: '0' | 'auto' | 'auto-reverse';
  viewBox: string;
  pathShape: string;
  textRepetition?: number;
  className?: string;
};

export function CMR2SVG({
  text,
  animationSpeed,
  characterRotation,
  characterSpacing,
  viewBox,
  className,
  pathShape,
  textRepetition = 1,
}: CMR2SVGProps) {
  const textArray = text.repeat(textRepetition).split('');

  return (
    <svg className={className} viewBox={viewBox}>
      <path className="overflow-hidden" d={pathShape} fill="none" id="pathId" />

      <g>
        {textArray.map((character, index) => (
          <text className="fill-dark-lighter dark:fill-light-darker">
            {character}
            <animateMotion
              begin={`${characterSpacing * index}s`}
              calcMode="paced"
              dur={`${animationSpeed}s`}
              repeatCount="indefinite"
              rotate={characterRotation}
            >
              <mpath href="#pathId" />
            </animateMotion>
          </text>
        ))}
      </g>
    </svg>
  );
}
