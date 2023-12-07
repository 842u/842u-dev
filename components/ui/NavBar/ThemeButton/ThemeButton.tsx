'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ThemeButtonProps = {
  isActive?: boolean;
  className?: string;
};

function ThemeButton({ className, isActive }: ThemeButtonProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="color theme"
      className={twMerge(
        `${
          isActive ? 'operational' : ''
        } invisible flex aspect-square w-full flex-col items-center justify-center opacity-0 transition-opacity operational:visible operational:opacity-100 md:visible md:opacity-100`,
        className,
      )}
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="h-full w-full fill-light" />
      ) : (
        <MoonIcon className="h-full w-full fill-dark" />
      )}
    </button>
  );
}

export default ThemeButton;
