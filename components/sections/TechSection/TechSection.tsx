import { ReactIcon } from '@/components/icons/ReactIcon';

import { Section } from '../Section';

type ProgressBarProps = {
  percentageValue: number;
};

function ProgressBar({ percentageValue }: ProgressBarProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-4 bg-light-darker dark:bg-dark-lighter">
        <div
          className="relative h-4 w-10 -translate-x-1/2 bg-dark dark:bg-light"
          style={{ left: `${percentageValue}%` }}
        />
      </div>

      <div className="flex justify-between text-sm">
        <p>Begginer</p>
        <p>Intermediate</p>
        <p>Advanced</p>
      </div>
    </div>
  );
}

export function TechSection() {
  return (
    <Section ariaLabel="technologies overview" title="technologies">
      <div className="flex flex-col items-center justify-center">
        <ReactIcon className="my-4 w-1/3" />
        <ProgressBar percentageValue={35} />
      </div>
    </Section>
  );
}
