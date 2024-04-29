import Image from 'next/image';
import Link from 'next/link';

import AuthButton from './authButton';
import SearchBar from './searchBar';

function Gnb() {
  return (
    <header className="sticky top-0 z-[99] w-full px-5 py-3 bg-white">
      <nav className="flex flex-wrap items-center gap-4 m-auto md:relative md:gap-10 md:max-w-[964px]">
        <Link href="/">
          <Image src="/icons/logo2.svg" width={130} height={40} alt="로고" priority />
        </Link>
        <AuthButton />
        <SearchBar />
      </nav>
    </header>
  );
}

export default Gnb;
