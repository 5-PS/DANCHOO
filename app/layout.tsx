import './globals.css';
import localFont from 'next/font/local';

import ModalContainer from '@/components/modal/modalContainer';
import ReactQueryClientProvider from '@/components/reactQuery/reactQueryClientProvider';
import ModalProvider from '@/contexts/ModalProvider';
import Providers from '@/contexts/providers';

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
      <body className={myFont.className}>
        <ReactQueryClientProvider>
          <Providers>
            <ModalProvider>
              <div id="modal" />
              <div className='min-h-screen relative'>
                {children}
              </div>
              <ModalContainer />
            </ModalProvider>
          </Providers>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
