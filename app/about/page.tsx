import { CMR2SVG } from '@/components/decorative/CMR2SVG';
import { Section } from '@/components/sections/Section';
import { SectionParagraph } from '@/components/ui/SectionParagraph';
import { alienatedSVGPath } from '@/data/svgPaths';

export default function AboutPage() {
  return (
    <main>
      <Section className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro
          aperiam adipisci provident est nulla, laudantium cumque et dolore
          cupiditate amet dignissimos enim rem maxime!
        </SectionParagraph>
        <CMR2SVG
          animationDuration={10}
          characterRotation="0"
          characterSpacing={0.08}
          className="w-full fill-light-darker text-[5px] dark:text-dark-lighter lg:w-1/3"
          pathShape={alienatedSVGPath}
          text="kamil bażanow "
          textRepetition={9}
          viewBox="0 0 200 200"
        />
      </Section>
    </main>
  );
}
