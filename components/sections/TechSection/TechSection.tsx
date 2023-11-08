import { ReactIcon } from '@/components/icons/ReactIcon';

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
      <div className="flex flex-col items-center justify-center">
        <ReactIcon className="my-4 w-1/3" />
        <ProgressBar
          endLabel="Advanced"
          middleLabel="Intermediate"
          percentageValue={35}
          startLabel="Begginer"
        />
      </div>
    </Section>
  );
}
