import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeProvider';
import Header from '@/components/layout/Header/Header';
import { TranslationProvider } from '@/context/TranslationProvider';
import 'yet-another-react-lightbox/styles.css';

import './globals.scss';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Carlos Rojas | Frontend Developer',
  description:
    'Portfolio of Carlos Rojas, a passionate web and mobile developer with expertise in React, Next.js, Firebase, and more.',
  authors: [{ name: 'Carlos Gerardo Rojas Jaime' }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable}`}>
        <ThemeProvider>
          <TranslationProvider>
            <Header />
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
