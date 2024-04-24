'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import DetailFilterModal from '@/components/filterModal/detailFilterModal';
import Pagination from '@/components/pagination/pagination';
import Post from '@/components/post/post';
import SortingDropdown from '@/components/sortingDropdown/sortingDropdown';
import { getNotices } from '@/services/api';

function TotalRecruitList({ searchParams }) {
  const [sortOption, setSortOption] = useState<'time' | 'pay' | 'hour' | 'shop' | undefined>('time');

  const { data } = useQuery({
    queryKey: ['notices', sortOption, searchParams.page],
    queryFn: () =>
      getNotices({
        sort: sortOption,
        offset: (searchParams.page - 1) * 6,
      }),
  });

  if (!data) return null;

  const pageLength = data ? data.count : 0;

  const handleSortChange = (option: 'time' | 'pay' | 'hour' | 'shop' | undefined) => {
    setSortOption(option);
  };
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[28px] font-bold">전체 공고</h2>
        <div className="flex items-center mb-4 md:mb-8">
          <div className="w-[105px] h-[30px]">
            <SortingDropdown onSelect={handleSortChange} sortOption={sortOption} />
          </div>
          <DetailFilterModal />
        </div>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-[14px] sm:gap-y-8">
        {data.items.map(({ item }) => (
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
      <Pagination page={searchParams.page} sliceDataValue={6} totalDataCount={pageLength} />
      <div />
    </>
  );
}
export default TotalRecruitList;
