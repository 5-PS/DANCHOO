import './globals.css';

import { Inter } from 'next/font/google';

import Gnb from '@/components/gnb/gnb';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Julge',
  description: 'The Julge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Gnb />
        {children}
      </body>
    </html>
  );
}
