import { SpecificToolIconProps, ToolIcon } from './ToolIcon';

export function DockerIcon({ className }: SpecificToolIconProps) {
  return (
    <ToolIcon
      className={className}
      href="https://www.docker.com/"
      title="Docker"
      viewBox="0 0 128 128"
    >
      <path d="M125 52c-5-2-10-3-15-1-1-5-4-10-8-13l-2-1-1 1c-3 3-3 8-3 12l3 9-4 2-9 2h-7V49H66V24H51v12H26v13H13v14H2v2c-1 6 0 12 3 18l1 2c8 14 22 19 37 19 29 0 53-13 64-40 7 0 15-2 18-9l1-2-1-1zM28 39h10v11H28V39zm13 44c0 2-1 3-3 3s-3-1-3-3c0-1 1-3 3-3s3 2 3 3zM28 52h10v11H28V52zm-13 0h11v11H15V52zm28 50c-16 0-25-5-32-12h11l10-2c2 6 7 11 14 14h-3zm8-39H40V52h11v11zm0-13H40V39h11v11zm13 13H53V52h11v11zm0-13H53V39h11v11zm0-13H53V26h11v11zm13 26H66V52h11v11zM39 81h-1l-2 2 2 2 2-2v-1l-1 1-1-1 1-1z" />
    </ToolIcon>
  );
}
