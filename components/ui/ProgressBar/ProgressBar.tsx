type ProgressBarProps = {
  percentageValue: number;
  startLabel?: string;
  middleLabel?: string;
  endLabel?: string;
};

export function ProgressBar({
  percentageValue,
  startLabel,
  middleLabel,
  endLabel,
}: ProgressBarProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-light-darker dark:bg-dark-lighter relative h-4">
        <div
          className="bg-dark dark:bg-light relative h-4 w-10 -translate-x-1/2"
          style={{ left: `${percentageValue}%` }}
        />
      </div>

      <div className="flex justify-between py-2 text-sm md:text-lg lg:text-base">
        <p>{startLabel}</p>
        <div aria-hidden className="bg-dark dark:bg-light h-6 w-0.5" />
        <p>{middleLabel}</p>
        <div aria-hidden className="bg-dark dark:bg-light h-6 w-0.5" />
        <p>{endLabel}</p>
      </div>
    </div>
  );
}
