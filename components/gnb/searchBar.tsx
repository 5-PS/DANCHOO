'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

function SearchBar() {
  const [value, setValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      router.push(`?keyword=${value}`);
      setValue('');
    }
  };

  return (
    <form
      className="flex items-center w-full gap-2 p-2 bg-gray-10 rounded-[10px] md:w-[344px] xl:w-[400px]"
      onSubmit={handleSubmit}
    >
      <Image src="/icons/search.svg" width={20} height={20} alt="로고" />
      <input
        value={value}
        className="flex-1 outline-none bg-gray-10 placeholder:text-gray-40 placeholder:text-xs"
        type="text"
        placeholder="기업 이름으로 찾아보세요"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
    </form>
  );
}
export default SearchBar;
