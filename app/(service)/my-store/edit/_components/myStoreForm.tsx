'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import SelectInput from '@/components/input/selectInput';

// 2. SelectInput에 이름 props로 넘겨주기
// 3. SelectInput의 옵션 메뉴 position absolute 주기

export default function MyStoreForm() {
  const [imageSrc, setImageSrc] = useState<any>(null);

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc(reader.result);
      };
    }
  };
  console.log(imageSrc);
  return (
    <form>
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex gap-5">
          <Input label="가게 이름*" />
          <SelectInput />
        </div>
        <div className="flex gap-5">
          <SelectInput />
          <Input label="상세 주소*" />
        </div>
        <div className="w-[472px]">
          <Input label="기본 시급*" />
        </div>
        <div className="w-[483px]">
          <p className="mb-2">가게 이미지</p>
          <label
            htmlFor="image-input"
            className="flex flex-col gap-3 font-bold text-gray-40 w-full h-[276px] bg-gray-10 border border-gray-30 rounded-xl justify-center items-center cursor-pointer relative overflow-hidden"
          >
            <div className="inline-flex flex-col items-center gap-3">
              <Image src="/icons/image-add-icon.svg" width={32} height={32} />
              이미지 선택
              <input type="file" id="image-input" className="invisible w-0 h-0" onChange={handleUploadImage} />
            </div>
            {imageSrc && <Image src={imageSrc} fill alt="미리보기 이미지" />}
          </label>
        </div>
        <div>
          <p className="mb-2">가게 설명</p>
          <textarea className="w-full h-[153px] rounded-[6px] px-5 py-4 border border-gray-30" />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-[312px]">
          <Button fontSize={16} background="bg-primary">
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
