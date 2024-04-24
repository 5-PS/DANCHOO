import Image from 'next/image';
import Link from 'next/link';

import MyStoreForm from './_components/myStoreForm';

export default function MystoreEditFormPage() {
  return (
    <div className="flex flex-col w-full gap-6 px-3 pt-10 pb-20 md:py-[60px] md:px-0 md:w-full md:max-w-[680px] md:m-auto xl:max-w-[946px]">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold md:text-[28px]">가게 정보</h1>
        <Link href="/my-store" className="relative w-6 h-6 md:w-8 md:h-8">
          <Image src="/icons/close-modal-icon.svg" fill alt="이전버튼" />
        </Link>
      </div>
      <MyStoreForm />
    </div>
  );
}
