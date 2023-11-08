import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';
import { Skill } from '@/data/skills';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { Section } from '../Section';

type ExperienceSectionProps = {
  skills: Skill[];
};

export function ExperienceSection({ skills }: ExperienceSectionProps) {
  return (
    <Section ariaLabel="technologies overview" title="experience">
      <p className="text-justify md:text-xl lg:max-w-[50vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        adipisci fuga exercitationem delectus facilis eos quos vel molestiae
        recusandae atque quaerat, quod consequatur vitae quo quibusdam velit ex
        nihil, corrupti quisquam harum sint odio? Rerum, magni voluptatem ipsam
        architecto provident nisi impedit sint laudantium animi obcaecati,
        itaque alias aperiam saepe!
      </p>
      <div className="my-12 md:flex md:flex-wrap md:justify-evenly md:gap-10">
        {skills.map((skill) => {
          const ToolIcon = toolIconMapping[skill.name];
          return (
            <div className="my-4 flex flex-grow flex-col items-center justify-center md:my-0 md:w-1/3 md:max-w-[50%] lg:w-1/4 lg:min-w-max lg:max-w-[25%]">
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
