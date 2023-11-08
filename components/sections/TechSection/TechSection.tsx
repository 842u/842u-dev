import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';
import { mySkills } from '@/data/skills';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { Section } from '../Section';

export function TechSection() {
  return (
    <Section ariaLabel="technologies overview" title="technologies">
      <div className="md:flex md:flex-wrap md:justify-evenly md:gap-10">
        {mySkills.map((skill) => {
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
