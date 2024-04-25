import { ReactNode } from 'react';

import Gnb from '@/components/gnb/gnb';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Gnb />
      {children}
    </>
  );
}
