import './globals.css';

import type { Metadata } from 'next';

import { GlobalThemeProvider } from '@/components/providers/GlobalThemeProvider';
import { Footer } from '@/components/ui/Footer/Footer';
import { NavBar } from '@/components/ui/NavBar/NavBar';

export const metadata: Metadata = {
  title: '842u dev',
  description: '',
  applicationName: '842u.dev',
  creator: 'Kamil Bażanow',
  keywords: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Git',
    'frontend',
    'web',
    'technology',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-light text-dark transition-colors dark:bg-dark dark:text-light">
        <GlobalThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
