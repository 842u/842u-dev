/* eslint react/no-array-index-key:0 */

/*
 * Component that simulates Collin McRae Rally 2.0 main menu icons.
 * https://www.youtube.com/watch?v=EgmbAs_qmY8&ab_channel=Boo.E.Eng
 * Pass single <path> "d" parameter as pathShape prop.
 */

type CMR2SVGProps = {
  text: string;
  animationDuration: number;
  characterSpacing: number;
  characterRotation: '0' | 'auto' | 'auto-reverse';
  viewBox: string;
  pathShape: string;
  pathId: string;
  textRepetition?: number;
  instantStart?: boolean;
  className?: string;
};

export function CMR2SVG({
  text,
  animationDuration,
  characterRotation,
  characterSpacing,
  viewBox,
  className,
  pathShape,
  pathId,
  textRepetition = 1,
  instantStart = false,
}: CMR2SVGProps) {
  const textArray = text.repeat(textRepetition).split('');

  return (
    <svg className={className} viewBox={viewBox}>
      <path d={pathShape} fill="none" id={pathId} />

      <g>
        {textArray.map((character, index) => {
          let beginTime = animationDuration - index * characterSpacing;

          if (instantStart) {
            beginTime = animationDuration / 35 - index * characterSpacing;
          }

          return (
            <text key={`${character}${index}`} className="select-none">
              {character}
              <animateMotion
                begin={`${beginTime}s`}
                calcMode="paced"
                dur={`${animationDuration}s`}
                repeatCount="indefinite"
                rotate={characterRotation}
              >
                <mpath href={`#${pathId}`} />
              </animateMotion>
            </text>
          );
        })}
      </g>
    </svg>
  );
}
