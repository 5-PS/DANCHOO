'use client';

import { useQuery } from '@tanstack/react-query';

import DetailFilterModal from '@/components/filterModal/detailFilterModal';
import SelectInput from '@/components/input/selectInput';
import Pagination from '@/components/pagination/pagination';
import Post from '@/components/post/post';
import { getNotices } from '@/services/api';

export default function Home({ searchParams }) {
  const { data } = useQuery({ queryKey: ['notices'], queryFn: getNotices });
  if (!data) return;

  // 현우님이 유틸로 빼주실 함수
  const calcPage = (searchParams, data, offset) => {
    const isDefault = searchParams.page ? searchParams.page : '1';
    const pageLength = Math.ceil(data.items.length / offset);
    const sliceIndex = (parseInt(isDefault, 10) - 1) * offset;

    return [isDefault, pageLength, sliceIndex];
  };

  const [isDefault, pageLength, sliceIndex] = calcPage(searchParams, data, 6);

  return (
    <>
      <header>헤더 영역</header>
      <section className="bg-red-10">
        <div className="py-[60px] md:max-w-[964px] md:m-auto  ">
          <h2 className="pl-3 sm:pl-8 text-[28px] font-bold mb-4 md:mb-8">맞춤공고</h2>
          <div className="max-w-[964px] overflow-x-scroll box">
            <ul className="flex gap-2 sm:gap-[14px]">
              {data.items.slice(0, 8).map(({ item }) => (
                <li className="flex-none first:pl-3 last:pr-3 sm:last:pr-8 sm:first:pl-8" key={item.id}>
                  <Post
                    href={item.shop.href}
                    address={item.shop.item.address1}
                    imageUrl={item.shop.item.imageUrl}
                    name={item.shop.item.name}
                    hourlyPay={item.hourlyPay}
                    originalHourlyPay={item.shop.item.originalHourlyPay}
                    startsAt={item.startsAt}
                    workhour={item.workhour}
                    closed={item.closed}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-3 py-[60px] sm:px-8 md:max-w-[964px] md:m-auto">
        <div className="flex justify-between">
          <h2 className="text-[28px] font-bold">전체 공고</h2>
          <div className="flex items-center mb-4 md:mb-8">
            <div className="w-[105px] h-[30px]">
              <SelectInput />
            </div>
            <DetailFilterModal />
          </div>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-[14px] sm:gap-y-8">
          {data.items.slice(sliceIndex, sliceIndex + 6).map(({ item }) => (
            <li key={item.id}>
              <Post
                href={item.shop.href}
                address={item.shop.item.address1}
                imageUrl={item.shop.item.imageUrl}
                name={item.shop.item.name}
                hourlyPay={item.hourlyPay}
                originalHourlyPay={item.shop.item.originalHourlyPay}
                startsAt={item.startsAt}
                workhour={item.workhour}
                closed={item.closed}
              />
            </li>
          ))}
        </ul>
        <Pagination page={isDefault} pageLength={pageLength} />
        <div />
      </section>
    </>
  );
}
