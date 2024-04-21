import './globals.css';
import localFont from 'next/font/local';

import type { Metadata } from 'next';

const myFont = localFont({
  src: '../public/fonts/Pretendard-Regular.woff2',
  display: 'swap',
});

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
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
