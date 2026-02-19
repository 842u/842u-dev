import './globals.css';

import type { Metadata } from 'next';

import { GlobalThemeProvider } from '@/components/providers/GlobalThemeProvider';
import { Footer } from '@/components/ui/Footer/Footer';
import { NavBar } from '@/components/ui/NavBar/NavBar';

export const metadata: Metadata = {
  title: '842u dev',
  description: `Hello there 🫡. Nice to see you here! My name is Kamil Bażanow, and I'm a web developer specializing in frontend technologies. However, I'm not limited to the frontend alone and eager to learn new technologies and expand my knowledge across different areas of tech.
  I'm currently looking for a job where I can collaborate with a team of cool, talented individuals to create awesome things together. If you're seeking a passionate developer to join your team, let's connect!`,
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
    <html suppressHydrationWarning lang="en">
      <body className="bg-light text-dark dark:bg-dark dark:text-light transition-colors">
        <GlobalThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
