import Image from 'next/image';
import Link from 'next/link';

import AuthButton from './authButton';
import SearchBar from './searchBar';
import { cookies } from 'next/headers';
import { decodeJWT } from '@/utils/decodeJWT';

async function Gnb() {
  const cookie = cookies()
  const token = cookie.get('accessToken')
  const { userId } = decodeJWT(token?.value as string)

  return (
    <header className="sticky top-0 z-[99] w-full px-5 py-3 bg-white">
      <nav className="flex flex-wrap items-center gap-4 m-auto md:relative md:gap-10 md:max-w-[964px]">
        <Link href="/">
          <Image src="/icons/logo.svg" width={112} height={40} alt="로고" priority />
        </Link>
        <AuthButton userId={userId} />
        <SearchBar />
      </nav>
    </header>
  );
}

export default Gnb;
