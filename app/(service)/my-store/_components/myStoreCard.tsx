import Image from 'next/image';

import Button from '@/components/button/button';

import { item } from './가게정보.json';
/**
 * @todo 처음에 가게 정보 없을 때 보여줄 가게없음 보이게 => 없을 때에는 가게 등록하기 보이게
 * @todo 편집하기 누르면 가게 정보 편집 페이지로
 * @todo 공고 등록하기 페이지를 누르면 공고 등록하기 페이지로 이동
 * @todo 내가 등록한 공고 무한스크롤로, 최신순으로 정렬하고,
 */
export default function MyStoreCard() {
  return (
    <div className=" bg-red-10 flex flex-col w-[351px] xl:w-[964px] gap-3 p-5 mx-auto mb-3 md:w-[632px] border rounded-xl border-gray-20 md:p-6 md:mb-6 md:gap-4 xl:flex-row xl:gap-8 ">
      <div className="h-[178px] md:h-[361px] xl:h-auto">
        <Image
          className="w-[311px] h-[177px] md:w-[632px] md:h-[361px] xl:w-[539px] xl:h-[308px]  bg-slate-500" // 임시로 배경. 나중에 이미지넣고 지우기
          src={item.imageUrl}
          alt="가게이미지"
          width={311}
          height={177}
        />
      </div>
      <div className="flex flex-col justify-between xl:w-[343px] ">
        <div className="flex flex-col gap-2 xl:pt-4 md:gap-3">
          <div>
            <span className="inline-block mb-2 font-bold text-primary text-[14px] md:text-[16px]">{item.category}</span>
            <div className="font-bold text-[24px] flex gap-2 items-center md:text-[28px]">{item.name}</div>
          </div>
          <div className="flex gap-[6px]">
            <Image src="./icons/location-red.svg" alt="위치아이콘" width={16} height={16} />
            <div className="text-sm font-normal leading-snug text-zinc-500 ">{item.address1}</div>
          </div>
          <p className="leading-[26px] text-[14px] md:text-[16px] line-clamp-3">{item.description}</p>
        </div>
        <div className="flex gap-2 ">
          <Button background="bg-white" className="py-2 font-bold font-pretendard">
            편집하기
          </Button>
          <Button background="bg-primary" className="py-2 font-bold">
            공고 등록하기
          </Button>
        </div>
      </div>
    </div>
  );
}
