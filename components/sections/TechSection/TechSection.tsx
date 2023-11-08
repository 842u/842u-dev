import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';
import { mySkills } from '@/data/skills';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { Section } from '../Section';

export function TechSection() {
  return (
    <Section ariaLabel="technologies overview" title="technologies">
      {mySkills.map((skill) => {
        const ToolIcon = toolIconMapping[skill.name];
        return (
          <div className="flex flex-col items-center justify-center">
            <ToolIcon className="my-4 w-1/4" />
            <ProgressBar
              endLabel="Advanced"
              middleLabel="Intermediate"
              percentageValue={skill.progress}
              startLabel="Begginer"
            />
          </div>
        );
      })}
    </Section>
  );
}
