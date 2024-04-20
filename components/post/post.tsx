import { format as dateFnsFormat, parseISO as parseDate, addHours } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import calculatePercentage from '@/utils/calculatePercentage';

interface PostProps {
  href: string;
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
function Post({ href, address, imageUrl, name, hourlyPay, originalHourlyPay, startsAt, workhour, closed }: PostProps) {
  const percentage = calculatePercentage(hourlyPay, originalHourlyPay);

  const startsAtDate = parseDate(startsAt);
  const endAtDate = addHours(startsAtDate, workhour);
  const formattedStartTime = dateFnsFormat(startsAtDate, 'yyyy-MM-dd HH:mm');
  const formattedEndTime = dateFnsFormat(endAtDate, 'HH:mm');
  const info = `${formattedStartTime}~${formattedEndTime}`;
  return (
    <Link
      href={href}
      className="flex flex-col items-center justify-center gap-3 p-3 border border-solid bg-white border-gray-20 rounded-xl md:w-max-[312px] md:p-4 md:gap-5"
    >
      <div className="relative w-full h-[84px] md:h-40">
        <Image
          className={`rounded-xl ${closed ? 'brightness-50' : ''}`}
          src={imageUrl}
          fill
          unoptimized
          objectFit="cover"
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
          <h2 className={`font-bold md:text-xl ${closed ? 'text-gray-30' : 'text-black'}`}>{name}</h2>

          <div className="flex items-start gap-1.5 md:items-center ">
            <Image
              src={closed ? '/icons/clock-gray.svg' : '/icons/clock-red.svg'}
              width={20}
              height={20}
              alt="시계 아이콘"
            />
            {/* TODO: 유틸로 빼야 함 */}
            <p className={`text-xs md:text-sm ${closed ? 'text-gray-30' : 'text-gray-50'}`}>
              {info} ({workhour}시간)
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
          <div
            className={`flex justify-start items-center gap-0.5 md:p-3 md:rounded-[20px] md:h-9 ${closed ? 'md:bg-gray-20' : 'md:bg-red-40'}`}
          >
            <div
              className={`text-xs text-center whitespace-nowrap text-ellipsis overflow-hidden max-w-[125px] md:text-white md:font-bold ${closed ? 'text-gray-30' : 'text-red-40'}`}
            >
              기존 시급보다 {percentage}%
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
              src={closed ? '/icons/arrow-gray.svg' : '/icons/arrow-red.svg'}
              alt="화살표 아이콘"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
