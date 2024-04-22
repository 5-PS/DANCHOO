'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import Button from '@/components/button/button';
import PercentageBadge from '@/components/post/percentageBadge';
import apiClient from '@/libs/axios';
import calculatePercentage from '@/utils/calculatePercentage';
import formatDateRange from '@/utils/formatDateRange';

interface FetchData {
  hourlyPay: 'number';
  startsAt: 'string';
  workhour: 'number';
  description: 'string';
  closed: 'boolean';
  shop: {
    item: {
      name: 'string';
      category: 'string';
      address1: 'string';
      description: 'string';
      imageUrl: 'string';
      originalHourlyPay: 'number';
    };
  };
}

function RecruitCard() {
  const [recruitData, setRecruitData] = useState<FetchData | null>(null);
  const { shopId, recruitId } = useParams();
  // 임시로 쓴 데이터 요청임
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get(`/shops/${shopId}/notices/${recruitId}`);
        setRecruitData(res.data.item);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [shopId, recruitId]);
  const percentage = calculatePercentage(recruitData?.hourlyPay, recruitData?.shop.item.originalHourlyPay);

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-bold text-primary md:text-base">{recruitData?.shop.item.category}</span>
        <h2 className="text-xl font-bold text-black md:text-[28px]">{recruitData?.shop.item.name}</h2>
      </div>

      <div className="flex flex-col gap-3 p-5 border border-solid md:p-6 md:gap-4 border-gray-20 rounded-xl xl:flex-row">
        <Image
          className="w-full h-auto max-h-[361px] rounded-xl xl:max-w-[539px] xl:max-h-full"
          src={recruitData?.shop.item.imageUrl}
          width={500}
          height={100}
          unoptimized
          objectFit="cover"
          alt="가게 이름"
        />
        <div className="flex flex-col justify-between gap-6 md:gap-10 xl:gap-[14px] xl:pt-4 flex-1">
          <div className="flex flex-col gap-2 md:gap-3">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-primary md:text-base">시급</span>
              <div className="flex items-center gap-1 md:gap-2">
                <div className="text-2xl font-bold text-black md:text-[28px]">
                  {recruitData?.hourlyPay.toLocaleString()}원
                </div>
                <PercentageBadge closed={recruitData?.closed} percentage={percentage} />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 md:gap-3">
              <div className="flex gap-1.5">
                <Image src="/icons/clock-red.svg" width={20} height={20} alt="시계 아이콘" />
                <span className="text-sm text-gray-50 md:text-base">
                  {formatDateRange(recruitData?.startsAt, recruitData?.workhour)} ({recruitData?.workhour}시간)
                </span>
              </div>
              <div className="flex gap-1.5">
                <Image src="/icons/location-red.svg" width={20} height={20} alt="위치 아이콘" />
                <span className="text-sm text-gray-50 md:text-base">{recruitData?.shop.item.address1}</span>
              </div>
              <div className="text-sm text-black md:text-base">{recruitData?.shop.item.description}</div>
            </div>
          </div>
          <Button fontSize={16} background="bg-primary">
            신청하기
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 md:gap-3 rounded-xl bg-gray-10 md:p-8">
        <span className="text-sm font-bold text-black md:text-base">공고 설명</span>
        <div className="text-sm text-black md:text-base">{recruitData?.description}</div>
      </div>
    </>
  );
}
export default RecruitCard;
