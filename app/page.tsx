import { GlobalThemeProvider } from '@/components/providers/GlobalThemeProvider';

import ThemeButton from '../components/ui/ThemeButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-9xl font-bold">
        <span className="after:bg-text relative block after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-[90%] after:translate-x-[-50%] md:inline md:after:static md:after:bottom-auto md:after:left-auto md:after:mx-4 md:after:inline md:after:h-auto md:after:translate-x-0 md:after:border-2">
          kamil
        </span>
        <span className="break-all">bażanow</span>
      </h1>
      <GlobalThemeProvider>
        <ThemeButton />
      </GlobalThemeProvider>
    </main>
  );
}
