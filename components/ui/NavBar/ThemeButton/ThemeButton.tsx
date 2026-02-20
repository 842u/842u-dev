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
        } hover:animate-blink operational:visible operational:opacity-100 invisible flex aspect-square w-full cursor-pointer flex-col items-center justify-center opacity-0 transition-opacity md:visible md:opacity-100`,
        className,
      )}
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="fill-light h-full w-full" />
      ) : (
        <MoonIcon className="fill-dark h-full w-full" />
      )}
    </button>
  );
}

export default ThemeButton;
