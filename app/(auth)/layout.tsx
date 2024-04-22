import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/icons/main-logo.svg';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen my-12">
      <header className="mb-10">
        <Link href="/">
          <Image src={logo} alt="The Julge logo" width={248} height={45} priority />
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
