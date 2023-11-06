type ProgressBarProps = {
  percentageValue: number;
};

function ProgressBar({ percentageValue }: ProgressBarProps) {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative h-6 bg-light-darker dark:bg-dark-lighter">
        <div
          className="relative h-6 w-10 -translate-x-1/2 bg-dark dark:bg-light"
          style={{ left: `${percentageValue}%` }}
        />
      </div>

      <div className="flex justify-between">
        <p>Begginer</p>
        <p>Intermediate</p>
        <p>Advanced</p>
      </div>
    </div>
  );
}

export function TechSection() {
  return (
    <section
      aria-label="technology stack"
      className="min-h-screen px-4 md:px-16 lg:px-36"
    >
      <h2 className="my-10 text-right text-4xl md:text-5xl">Technologies</h2>
      <div className="flex flex-col items-center justify-center">
        <ProgressBar percentageValue={40} />
      </div>
    </section>
  );
}
