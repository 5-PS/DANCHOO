import Image from 'next/image';
import Link from 'next/link';

import ProfileEditForm from './_components/profileEditForm';

export default function MyProfileEditPage() {
  return (
    <div>
      <div className="h-[70px] bg-red-40">헤더</div>
      <div className="w-full px-3 pt-10 pb-20 md:py-[60px] md:max-w-[680px] md:m-auto xl:max-w-[964px]">
        <div className="flex items-center justify-between mb-6 md:mb-8 ">
          <h1 className="text-xl font-bold md:text-[28px]">내 프로필</h1>
          <Link href="/my-profile" className="relative w-6 h-6 md:w-8 md:h-8">
            <Image src="/icons/close-modal-icon.svg" fill alt="이전버튼" />
          </Link>
        </div>
        <ProfileEditForm />
      </div>
    </div>
  );
}
