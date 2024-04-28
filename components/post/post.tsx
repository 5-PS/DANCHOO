'use client';

import { useMemo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { RecentlyViewedRecruitsType } from '@/app/(service)/recruit-detail/[shopId]/[recruitId]/_components/recentlyViewedRecruits';
import calculatePercentage from '@/utils/calculatePercentage';
import formatDateRange from '@/utils/formatDateRange';

function Post({
  id,
  shopId,
  address,
  imageUrl,
  name,
  hourlyPay,
  originalHourlyPay,
  startsAt,
  workhour,
  closed,
}: RecentlyViewedRecruitsType) {
  const percentage = useMemo(() => calculatePercentage(hourlyPay, originalHourlyPay), [hourlyPay, originalHourlyPay]);
  const isPassed = new Date() > new Date(startsAt);
  const isClosed = closed || isPassed;

  const handleClick = () => {
    const recentlyViewedRecruits = JSON.parse(sessionStorage.getItem('recentlyViewedRecruits') || '[]');

    const recruitInfo = {
      id,
      shopId,
      address,
      imageUrl,
      name,
      hourlyPay,
      originalHourlyPay,
      startsAt,
      workhour,
      isClosed,
    };

    const isAlreadyListedIndex = recentlyViewedRecruits.findIndex(
      (recruit: { id: string }) => recruit.id === recruitInfo.id,
    );

    if (isAlreadyListedIndex === -1) {
      if (recentlyViewedRecruits.length >= 6) recentlyViewedRecruits.pop();
    } else {
      recentlyViewedRecruits.splice(isAlreadyListedIndex, 1);
    }
    recentlyViewedRecruits.unshift(recruitInfo);

    sessionStorage.setItem('recentlyViewedRecruits', JSON.stringify(recentlyViewedRecruits));
  };
  return (
    <Link
      href={`/recruit-detail/${shopId}/${id}`}
      onClick={handleClick}
      className="flex flex-col items-center min-w-32 min-h-[350px] md:min-h-[335px] justify-center gap-3 p-3 border border-solid bg-white border-gray-20 rounded-xl md:w-max-[312px] md:p-4 md:gap-5"
    >
      <div className="relative flex-auto w-full">
        <Image
          className={`rounded-xl ${isClosed ? 'brightness-50' : ''}`}
          src={imageUrl}
          fill
          unoptimized
          sizes="100vw"
          alt={name}
          priority
        />
        {isClosed && (
          <span className="absolute text-xl font-bold transform -translate-x-1/2 -translate-y-1/2 text-gray-30 top-1/2 left-1/2 whitespace-nowrap">
            {closed ? '마감 완료' : '지난 공고'}
          </span>
        )}
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2
            className={`font-bold md:text-xl whitespace-nowrap text-ellipsis overflow-hidden ${isClosed ? 'text-gray-30' : 'text-black'}`}
          >
            {name}
          </h2>

          <div className="flex items-start gap-1.5 md:items-center ">
            <Image
              src={isClosed ? '/icons/clock-gray.svg' : '/icons/clock-red.svg'}
              width={20}
              height={20}
              alt="시계 아이콘"
            />
            <p className={`text-xs md:text-sm ${isClosed ? 'text-gray-30' : 'text-gray-50'}`}>
              {formatDateRange(startsAt, workhour)} ({workhour}시간)
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <Image
              src={isClosed ? '/icons/location-gray.svg' : '/icons/location-red.svg'}
              width={20}
              height={20}
              alt="위치 아이콘"
            />
            <p className={`text-xs md:text-sm ${isClosed ? 'text-gray-30' : 'text-gray-50'}`}>{address}</p>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between">
          <p
            className={`text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden max-w-[130px] md:text-2xl md:tracking-[.48px] ${isClosed ? 'text-gray-30' : 'text-black'}`}
          >
            {hourlyPay.toLocaleString()}원
          </p>
          {percentage >= 5 && (
            <div
              className={`flex justify-start items-center gap-0.5 md:p-3 md:rounded-[20px] md:h-9 ${isClosed ? 'md:bg-gray-20' : 'md:bg-red-40'}`}
            >
              <div
                className={`text-xs text-center whitespace-nowrap text-ellipsis overflow-hidden max-w-[125px] md:text-white md:font-bold ${isClosed ? 'text-gray-30' : 'text-red-40'}`}
              >
                기존 시급보다 ${percentage}%
              </div>
              <Image
                className="max-[767px]:hidden"
                src="/icons/arrow-white.svg"
                width={12}
                height={12}
                alt="위치 아이콘"
              />
              <Image
                className="md:hidden"
                src={`${isClosed ? '/icons/arrow-gray.svg' : '/icons/arrow-red.svg'}`}
                alt="화살표 아이콘"
                width={12}
                height={12}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default Post;
