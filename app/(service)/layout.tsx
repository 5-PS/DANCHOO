import { Inter } from 'next/font/google';

import Gnb from '@/components/gnb/gnb';

const inter = Inter({ subsets: ['latin'] });

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
