import Image from 'next/image';

import PercentageBadge from '@/components/post/percentageBadge';
import { getDetailRecruit } from '@/services/api';
import calculatePercentage from '@/utils/calculatePercentage';
import formatDateRange from '@/utils/formatDateRange';

import ApplicationButton from './applicationButton';
import { cookies } from 'next/headers';
import { decodeJWT } from '@/utils/decodeJWT';

interface RecruitCardProps {
  shopId: string;
  recruitId: string;
}

type CategoryMap = {
  [key: string]: string;
};


const CATEGORY_LIST:CategoryMap = {
  한식:'개발' ,
  중식:'디자인',
  일식:'경영',
  양식:'마케팅',
  분식:'영업',
  카페:'회계',
  편의:'상품기획/MD',
  기타:'HR',
};

async function RecruitCard({ shopId, recruitId }: RecruitCardProps) {
  const response = await getDetailRecruit(shopId, recruitId);
  const cookie = cookies();
  const token = cookie.get('accessToken');
  const { userId } = decodeJWT(token?.value as string);
  const recruitStatus = cookie.get(`recruit_${recruitId}`)
  const { item } = response;
  const { shop } = item;
  const isPassed = new Date() > new Date(item.startsAt);
  const isClosed = item.closed || isPassed;
  const percentage = calculatePercentage(item.hourlyPay, shop.item.originalHourlyPay);

  return (
    <>
      <div className="mb-4 md:mb-6">
        <span className="text-[14px] inline-block mb-2 font-bold text-primary md:text-[16px]">
          {CATEGORY_LIST[shop.item.category]}
        </span>
        <h1 className="text-[20px] font-bold md:text-[28px]">{shop.item.name}</h1>
      </div>
      <div className="flex flex-col w-full gap-3 p-5 mb-3 border rounded-xl border-gray-20 md:p-6 md:mb-6 md:gap-4 xl:flex-row xl:gap-8">
        <div className="w-full h-[178px] relative md:h-[350px] xl:h-auto">
          <Image
            className={`rounded-xl ${isClosed ? 'brightness-50' : ''}`}
            src={shop.item.imageUrl}
            fill
            unoptimized
            alt="기업 이미지"
          />
          {isClosed && (
            <span className="absolute text-xl font-bold transform -translate-x-1/2 -translate-y-1/2 text-gray-30 top-1/2 left-1/2 whitespace-nowrap">
              {item.closed ? '마감 완료' : '지난 공고'}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 xl:pt-4 md:gap-3 md:max-w-full xl:max-w-[346px] xl:w-full xl:justify-between">
          <div>
            <span className="inline-block mb-2 font-bold text-primary text-[14px] md:text-[16px]">시급</span>
            <div className="font-bold text-[24px] flex gap-2 items-center md:text-[28px]">
              {item.hourlyPay.toLocaleString()}원
              {percentage >= 5 && <PercentageBadge isClosed={item.closed} percentage={percentage} />}
            </div>
          </div>
          <div className="text-gray-50 text-[14px] md:text-[16px] flex items-center gap-[6px] leading-[26px]">
            <span className="relative inline-block w-4 h-4 md:w-5 md:h-5">
              <Image src="/icons/clock-red.svg" fill alt="시계 아이콘" />
            </span>
            {formatDateRange(item.startsAt, item.workhour)} ({item.workhour} 시간)
          </div>
          <div className="text-gray-50 text-[14px] md:text-[16px] flex items-center gap-[6px] leading-[26px]">
            <span className="relative inline-block w-4 h-4 md:w-5 md:h-5">
              <Image src="/icons/location-red.svg" fill alt="주소 아이콘" />
            </span>
            {shop.item.address1}
          </div>
          <p className="leading-[26px] text-[14px] md:text-[16px] line-clamp-2">{shop.item.description}</p>
          <ApplicationButton isClosed={isClosed} shopId={shopId} recruitId={recruitId} recruitStatus={recruitStatus} userId={userId} />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-5 rounded-xl bg-red-10 text-[14px] md:text-[16px] md:p-8 md:gap-3">
        <h2 className="font-bold">공고 설명</h2>
        <p className="whitespace-pre-line text-pretty">{item.description}</p>
      </div>
    </>
  );
}
export default RecruitCard;