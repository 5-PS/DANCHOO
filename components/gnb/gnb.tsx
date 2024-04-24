import Image from 'next/image';
import Link from 'next/link';

import AuthButton from './authButton';
import SearchBar from './searchBar';

function Gnb() {
  return (
    <header className="sticky top-0 z-10 px-5 py-3 m-auto bg-white md:px-8 w-full md:max-w-[964px]">
      <nav className="flex flex-wrap items-center gap-4 md:relative md:gap-10">
        <Link href="/">
          <Image src="/icons/logo.svg" width={112} height={40} alt="로고" />
        </Link>
        <AuthButton />
        <SearchBar />
      </nav>
    </header>
  );
}

export default Gnb;
