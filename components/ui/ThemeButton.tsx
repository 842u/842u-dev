'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center justify-center rounded-lg p-2 transition-colors"
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? 'light' : 'dark'}
    </button>
  );
}

export default ThemeButton;
