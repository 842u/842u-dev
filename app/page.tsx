import { GlobalThemeProvider } from '@/components/providers/GlobalThemeProvider';

import ThemeButton from '../components/ui/ThemeButton';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="divide-x-2 text-5xl">
        <span className="p-2">kamil</span>
        <span className="p-2">bażanow</span>
      </h1>
      <br />
      <GlobalThemeProvider>
        <ThemeButton />
      </GlobalThemeProvider>
    </main>
  );
}
