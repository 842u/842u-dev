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
      <div className="relative h-4 bg-light-darker dark:bg-dark-lighter">
        <div
          className="relative h-4 w-10 -translate-x-1/2 bg-dark dark:bg-light"
          style={{ left: `${percentageValue}%` }}
        />
      </div>

      <div className="flex justify-between py-2 text-sm md:text-lg lg:text-base">
        <p>{startLabel}</p>
        <div aria-hidden className="h-6 w-[2px] dark:bg-light" />
        <p>{middleLabel}</p>
        <div aria-hidden className="h-6 w-[2px] dark:bg-light" />
        <p>{endLabel}</p>
      </div>
    </div>
  );
}
