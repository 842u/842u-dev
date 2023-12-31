import { CMR2SVG } from '@/components/decorative/CMR2SVG/CMR2SVG';
import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { alienatedSVGPath } from '@/data/svgPaths';

import { Section } from '../Section';

export function AboutMeSection() {
  return (
    <>
      <Section
        ariaLabel="brief about me"
        className="my-0 flex min-h-screen flex-col md:my-0 lg:my-0 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="flex min-h-screen flex-col justify-center">
          <div className="flex items-end justify-between">
            <h1 className="divide-x-2 text-5xl md:text-7xl lg:text-5xl">
              <span className="pr-2">about</span>
              <span className="pl-2">me</span>
            </h1>
            <CMR2SVG
              animationDuration={10}
              characterRotation="0"
              characterSpacing={0.08}
              className="hidden fill-light-darker text-[5px] dark:text-dark-lighter md:block md:w-1/2 lg:hidden"
              pathId="alienatedPath"
              pathShape={alienatedSVGPath}
              text="kamil bażanow "
              textRepetition={9}
              viewBox="0 0 200 200"
            />
          </div>
          <SectionParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro
            aperiam adipisci provident est nulla, laudantium cumque et dolore
            cupiditate amet dignissimos enim rem maxime!
          </SectionParagraph>
        </div>
        <CMR2SVG
          animationDuration={10}
          characterRotation="0"
          characterSpacing={0.08}
          className="w-full fill-light-darker text-[5px] dark:text-dark-lighter md:hidden lg:block lg:w-1/3"
          pathId="alienatedPath"
          pathShape={alienatedSVGPath}
          text="kamil bażanow "
          textRepetition={9}
          viewBox="0 0 200 200"
        />
      </Section>
      <Section ariaLabel="more about me">
        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dolores
          deserunt. Doloremque, fugit architecto magnam, est possimus placeat
          sunt fugiat libero quia necessitatibus sequi labore obcaecati.
          Dolorum, illo aut. Sit repudiandae natus aperiam, dolores iure enim
          adipisci esse quaerat? Tempora, rerum repellat reiciendis odio sint
          consequuntur voluptatibus nobis sequi error.
        </SectionParagraph>
      </Section>
    </>
  );
}
