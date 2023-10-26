'use client';

/* eslint react/no-array-index-key:0 */

/*
 * Component that simulates Collin McRae Rally 2.0 main menu icons.
 * https://www.youtube.com/watch?v=EgmbAs_qmY8&ab_channel=Boo.E.Eng
 * Pass <path> "d" parameter as pathShape prop.
 * animationSpeed => bigger number = slower animation
 */

type CMR2AnimatedTextProps = {
  text: string;
  animationSpeed: number;
  characterSpacing: number;
  characterRotation: '0' | 'auto' | 'auto-reverse';
  viewBox: string;
  pathShape: string;
  textRepetition?: number;
  className?: string;
};

export function CMR2AnimatedText({
  text,
  animationSpeed,
  characterRotation,
  characterSpacing,
  viewBox,
  className,
  pathShape,
  textRepetition = 1,
}: CMR2AnimatedTextProps) {
  const textArray = text.repeat(textRepetition).split('');

  return (
    <svg className={className} viewBox={viewBox}>
      <path d={pathShape} fill="none" id="pathId" />

      {textArray.map((character, index) => (
        <text key={`${character}${index}`} className="select-none">
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
    </svg>
  );
}
