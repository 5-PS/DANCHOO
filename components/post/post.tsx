import Image from 'next/image';
import Link from 'next/link';

import calculatePercentage from '@/utils/calculatePercentage';
import formatDateRange from '@/utils/formatDateRange';

import PercentageBadge from './percentageBadge';

interface PostProps {
  id: string;
  shopId: string;
  address: string;
  imageUrl: string;
  name: string;
  hourlyPay: number;
  originalHourlyPay: number;
  startsAt: string;
  workhour: number;
  closed: boolean;
}
// TODO: 마감 완료와 지난 알바에 따라 달라지는거 만들어야 함
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
}: PostProps) {
  const percentage = calculatePercentage(hourlyPay, originalHourlyPay);

  return (
    <Link
      href={`/recruit-detail/${shopId}/${id}`}
      className="flex flex-col items-center min-w-32 min-h-[350px] md:min-h-[335px] justify-center gap-3 p-3 border border-solid bg-white border-gray-20 rounded-xl md:w-max-[312px] md:p-4 md:gap-5"
    >
      <div className="relative flex-auto w-full">
        <Image
          className={`rounded-xl ${closed ? 'brightness-50' : ''}`}
          src={imageUrl}
          fill
          unoptimized
          sizes="100vw"
          alt={name}
        />
        {closed && (
          <p className="absolute text-xl font-bold transform -translate-x-1/2 -translate-y-1/2 text-gray-30 top-1/2 left-1/2 whitespace-nowrap">
            마감 완료
          </p>
        )}
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-2">
          <h2
            className={`font-bold md:text-xl whitespace-nowrap text-ellipsis overflow-hidden ${closed ? 'text-gray-30' : 'text-black'}`}
          >
            {name}
          </h2>

          <div className="flex items-start gap-1.5 md:items-center ">
            <Image
              src={closed ? '/icons/clock-gray.svg' : '/icons/clock-red.svg'}
              width={20}
              height={20}
              alt="시계 아이콘"
            />
            <p className={`text-xs md:text-sm ${closed ? 'text-gray-30' : 'text-gray-50'}`}>
              {formatDateRange(startsAt, workhour)} ({workhour}시간)
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <Image
              src={closed ? '/icons/location-gray.svg' : '/icons/location-red.svg'}
              width={20}
              height={20}
              alt="위치 아이콘"
            />
            <p className={`text-xs md:text-sm ${closed ? 'text-gray-30' : 'text-gray-50'}`}>{address}</p>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between">
          <p
            className={`text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden max-w-[130px] md:text-2xl md:tracking-[.48px] ${closed ? 'text-gray-30' : 'text-black'}`}
          >
            {hourlyPay.toLocaleString()}원
          </p>
          {percentage >= 5 && <PercentageBadge closed={closed} percentage={percentage} />}
        </div>
      </div>
    </Link>
  );
}

export default Post;
