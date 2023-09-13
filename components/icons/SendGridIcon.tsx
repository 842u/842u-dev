import { SpecificToolIconProps, ToolIcon } from './ToolIcon';

export function SendGridIcon({ className }: SpecificToolIconProps) {
  return (
    <ToolIcon
      className={className}
      href="https://sendgrid.com"
      title="SendGrid"
    >
      <svg viewBox="0 0 256 256">
        <path
          className="fill-dark-lighter dark:fill-dark-lighter"
          d="M85.334 85.333H0V256h170.667V85.333z"
          fill="#9DE1F3"
        />
        <path
          className="fill-dark-lighter dark:fill-dark-lighter"
          d="M85.334 0v170.666H256V0z"
        />
        <path
          className="fill-dark dark:fill-light"
          d="M0 256h85.333v-85.333H0zM170.667 85.333H256V0h-85.333z"
        />
        <path
          className="fill-dark dark:fill-light"
          d="M85.334 170.667h85.333V85.334H85.334z"
        />
      </svg>
    </ToolIcon>
  );
}
