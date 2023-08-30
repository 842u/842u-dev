'use client';

import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: React.ReactNode;
};

export function GlobalThemeProvider({ children }: ProvidersProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
