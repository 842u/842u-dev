'use client';

import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useEffect, useRef, useState } from 'react';

import { bazuDevSVGPath } from '@/data/svgPaths';

gsap.registerPlugin(MotionPathPlugin);

function AllProjectsSection() {
  const [initialized, setInitialized] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  const myText = ' 842u dev ';
  const textArray = myText.repeat(50).split('');

  useEffect(() => {
    textArray.forEach((character, index) => {
      const idString = `idx${character}${index}`.replace(' ', '');

      const textElement = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text',
      );

      textElement.textContent = character;
      textElement.id = idString;

      svgRef.current?.appendChild(textElement);
    });

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      textArray.forEach((character, index) => {
        const idString = `#idx${character}${index}`.replace(' ', '');

        gsap.to(idString, {
          duration: 35,
          delay: index * 0.07,
          motionPath: bazuDevSVGPath,
          repeat: -1,
          ease: 'none',
        });
      });
    }
  }, [initialized]);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <section className="w-full">
        <svg className="fill-light" viewBox="0 0 292 57">
          <g ref={svgRef} className="text-[3px]" />
          <path className="invisible" d={bazuDevSVGPath} id="path" />
        </svg>
      </section>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <AllProjectsSection />
    </main>
  );
}
