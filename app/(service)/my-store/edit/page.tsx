import Image from 'next/image';
import Link from 'next/link';

import MyStoreForm from './_components/myStoreForm';

export default function MystoreEditFormPage() {
  return (
    <div>
      <div className="h-[70px] bg-red-20">헤더</div>
      <div className="w-full max-w-[964px] flex flex-col gap-8 m-auto py-[60px]">
        <div className="flex items-center justify-between">
          <h1 className="text-[28px] font-bold">가게 정보</h1>
          <Link href="/my-store">
            <Image src="/icons/close-modal-icon.svg" width={32} height={32} alt="이전버튼" />
          </Link>
        </div>
        <MyStoreForm />
      </div>
    </div>
  );
}
