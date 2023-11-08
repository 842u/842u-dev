import { mySkills } from '@/data/skills';
import { toolIconMapping } from '@/utils/toolIconMapping';

import { Section } from '../Section';

type ProgressBarProps = {
  percentageValue: number;
  startLabel?: string;
  middleLabel?: string;
  endLabel?: string;
};

function ProgressBar({
  percentageValue,
  startLabel,
  middleLabel,
  endLabel,
}: ProgressBarProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-4 bg-light-darker dark:bg-dark-lighter">
        <div
          className="relative h-4 w-10 -translate-x-1/2 bg-dark dark:bg-light"
          style={{ left: `${percentageValue}%` }}
        />
      </div>

      <div className="flex justify-between py-2 text-sm">
        <p>{startLabel}</p>
        <p>{middleLabel}</p>
        <p>{endLabel}</p>
      </div>
    </div>
  );
}

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
