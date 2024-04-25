'use client';

import { useQuery } from '@tanstack/react-query';

import Post from '@/components/post/post';
import { getPersonalNotices } from '@/services/api';
import { RecruitResponse } from '@/types/api';

import TotalRecruitList from './_components/totalRecruitList';

export default function Home({
  searchParams,
}: {
  searchParams: {
    page: number;
  };
}) {
  const { data } = useQuery<RecruitResponse>({ queryKey: ['notices'], queryFn: getPersonalNotices });
  if (!data) return null;

  return (
    <>
      <section className="bg-red-10">
        <div className="py-[60px] md:max-w-[964px] md:m-auto">
          <h2 className="pl-3 sm:pl-8 text-[28px] font-bold mb-4 md:mb-8">맞춤공고</h2>
          <div className="max-w-[964px] overflow-x-scroll box">
            <ul className="flex gap-2 sm:gap-[14px]">
              {data.items.slice(0, 8).map(({ item }) => (
                <li className="flex-none first:pl-3 last:pr-3 sm:last:pr-8 sm:first:pl-8" key={item.id}>
                  <Post
                    id={item.id}
                    shopId={item.shop.item.id}
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
        <TotalRecruitList page={searchParams.page} />
      </section>
    </>
  );
}
