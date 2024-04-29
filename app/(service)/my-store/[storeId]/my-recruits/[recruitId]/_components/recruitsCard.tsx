import Image from 'next/image';

import Button from '@/components/button/button';
import PercentageBadge from '@/components/post/percentageBadge';
import { getStoreRecruit } from '@/services/api';
import calculatePercentage from '@/utils/calculatePercentage';
import formatDateRange from '@/utils/formatDateRange';
import Link from 'next/link';

// TODO: 시급비교 라벨 따로빼기, 주소, 시간 아이콘 넣기
interface RecuitsCardProps {
  storeId: string;
  recruitId: string;
}

async function RecuitsCard({ storeId, recruitId }: RecuitsCardProps) {
  const response = await getStoreRecruit(storeId, recruitId);
  const { item } = response;
  const { shop } = item;

  return (
    <>
      <div className="mb-4 md:mb-6">
        <span className="text-[14px] inline-block mb-2 font-bold text-primary md:text-[16px]">
          {shop.item.category}
        </span>
        <h1 className="text-[20px] font-bold md:text-[28px]">{shop.item.name}</h1>
      </div>
      <div className="flex flex-col w-full gap-3 p-5 mb-3 border rounded-xl border-gray-20 md:p-6 md:mb-6 md:gap-4 xl:flex-row xl:gap-8">
        <div className="w-full h-[178px] relative md:h-[350px] xl:h-[320px]">
          <Image src={shop.item.imageUrl} className='rounded-2xl' fill alt="가게 이미지" />
        </div>
        <div className="flex flex-col gap-2 xl:pt-4 md:gap-3 md:max-w-full xl:max-w-[346px] xl:w-full xl:justify-between">
          <div>
            <span className="inline-block mb-2 font-bold text-primary text-[14px] md:text-[16px]">시급</span>
            <div className="font-bold text-[24px] flex gap-2 items-center md:text-[28px]">
              {item.hourlyPay.toLocaleString()}원
              <PercentageBadge
                isClosed={false}
                percentage={calculatePercentage(item.hourlyPay, shop.item.originalHourlyPay)}
              />
            </div>
          </div>
          <div className="text-gray-50 text-[14px] md:text-[16px] flex items-center gap-[6px] leading-[26px]">
            <span className="relative inline-block w-4 h-4 md:w-5 md:h-5">
              <Image src="/icons/clock-red.svg" fill alt="시계 아이콘" />
            </span>
            {`${formatDateRange(item.startsAt, item.workhour)} (${item.workhour} 시간)`}
          </div>
          <div className="text-gray-50 text-[14px] md:text-[16px] flex items-center gap-[6px] leading-[26px]">
            <span className="relative inline-block w-4 h-4 md:w-5 md:h-5">
              <Image src="/icons/location-red.svg" fill alt="주소 아이콘" />
            </span>
            {shop.item.address1}
          </div>
          <p className="leading-[26px] text-[14px] md:text-[16px] line-clamp-2">{shop.item.description}</p>
          <Link href={`/my-store/${storeId}/my-recruits/${recruitId}/edit`} >
            <Button background="bg-white" className="h-[48px]">
              공고 편집하기
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-5 rounded-xl bg-red-10 text-[14px] md:text-[16px] md:p-8 md:gap-3">
        <h2 className="font-bold">공고 설명</h2>
        <p className="text-pretty">{item.description}</p>
      </div>
    </>
  );
}

export default RecuitsCard;
