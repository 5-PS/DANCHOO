import { ReactNode } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ROUTE_PATHS from '@/constants/route';
import logo from '@/public/icons/main-logo.svg';

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12">
      <header className="mb-10">
        <Link href={ROUTE_PATHS.HOME}>
          <Image src={logo} alt="The Julge logo" width={248} height={45} priority />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
