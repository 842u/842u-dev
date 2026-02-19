import { BreakLine } from '@/components/decorative/BreakLine';
import { SectionParagraph } from '@/components/sections/SectionParagraph';
import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';
import { Skill } from '@/data/skills';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { Section } from '../Section';

const learingSince = new Date('March 1, 2022');

type ExperienceSectionProps = {
  skills: Skill[];
};

export function ExperienceSection({ skills }: ExperienceSectionProps) {
  return (
    <Section ariaLabel="skills overview" title="Experience">
      <SectionParagraph>
        My first contact with programming was during my time at the University
        of Technology, where I was introduced to the fundamentals of coding.
        <BreakLine />
        However, over the past{' '}
        {new Date().getFullYear() - learingSince.getFullYear()} years, I&apos;ve
        delved deeper into the world of programming and web technologies,
        expanding my skills.
        <BreakLine />
        During this time, I have gained knowledge not only in frontend
        technologies but also in various other aspects of the programming
        ecosystem. This journey has made me realize that I&apos;m just at the
        beginning, with much more to learn and discover ahead.
        <BreakLine />
        Here you can check my base technology stack:
      </SectionParagraph>
      <div className="my-12 md:flex md:flex-wrap md:justify-evenly md:gap-10">
        {skills.map((skill, index) => {
          const ToolIcon = toolIconMapping[skill.name];
          return (
            <div
              key={index}
              className="my-4 flex grow flex-col items-center justify-center md:my-0 md:w-1/3 md:max-w-[50%] lg:w-1/4 lg:max-w-[25%] lg:min-w-max"
            >
              <ToolIcon className="my-4 w-1/6 md:w-1/4" />
              <ProgressBar
                endLabel="Advanced"
                middleLabel="Intermediate"
                percentageValue={skill.progress}
                startLabel="Begginer"
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
