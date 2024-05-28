import { AlienatedSVG } from '@/components/decorative/CMR2SVG/AlienatedSVG';
import { SectionParagraph } from '@/components/sections/SectionParagraph';

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
            <AlienatedSVG className="hidden md:block md:w-1/2 lg:hidden" />
          </div>
          <SectionParagraph>
            Hello. My name is Kamil Bażanow. I&apos;m a detail-oriented person
            with a keen eye for detail. In everything I do, I try to be as
            accurate, precise and careful as I can, ensuring that every aspect
            of my work meets the highest standards of accuracy and quality.
            <br />
            <br />I thrive in dynamic environments where I can continuously
            innovate, learn and explore new technologies.
            <br />
            <br />
            As my little experience showed me, it&apos;s hard to build great
            things alone so I believe in the power of collaboration and feel
            excited about the opportunity to work with like-minded individuals
            and organizations to create impactful digital experiences.
          </SectionParagraph>
        </div>
        <AlienatedSVG className="w-full md:hidden lg:block lg:w-1/3" />
      </Section>
      <Section ariaLabel="more about me">
        <SectionParagraph />
      </Section>
    </>
  );
}
