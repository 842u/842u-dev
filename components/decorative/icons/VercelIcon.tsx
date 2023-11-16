import { SpecificToolIconProps, ToolIcon } from './ToolIcon';

export function VercelIcon({ className }: SpecificToolIconProps) {
  return (
    <ToolIcon
      className={className}
      href="https://vercel.com"
      title="Vercel"
      viewBox="0 0 512 512"
    >
      <path d="M256,48,496,464H16Z" fillRule="evenodd" />
    </ToolIcon>
  );
}
