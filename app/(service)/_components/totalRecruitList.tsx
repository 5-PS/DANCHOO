'use client';

import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import DetailFilterModal from '@/components/filterModal/detailFilterModal';
import Pagination from '@/components/pagination/pagination';
import Post from '@/components/post/post';
import SortingDropdown from '@/components/sortingDropdown/sortingDropdown';
import { getNotices } from '@/services/api';
import { RecruitResponse } from '@/types/api';

interface TFilter {
  address: string[];
  startsAtGte?: Date;
  hourlyPayGte: number;
}

function TotalRecruitList({ page }: { page?: number }) {
  const keyword = useSearchParams().get('keyword');
  const [sortOption, setSortOption] = useState<'time' | 'pay' | 'hour' | 'shop'>('time');
  const [filters, setFilters] = useState<TFilter>({
    address: [],
    startsAtGte: undefined,
    hourlyPayGte: 0,
  });
  const pageQuery = page || 1;

  const { data } = useQuery<RecruitResponse>({
    queryKey: ['notices', sortOption, page, filters, keyword],
    queryFn: () =>
      getNotices({
        sort: sortOption,
        limit: 6,
        offset: (pageQuery - 1) * 6,
        address: filters.address,
        keyword,
        startsAtGte: filters.startsAtGte,
        hourlyPayGte: filters.hourlyPayGte,
      }),
  });

  const pageLength = data?.count || 0;

  const handleFiltersChange = ({ address, startsAtGte, hourlyPayGte }: TFilter) => {
    setFilters({
      address,
      startsAtGte,
      hourlyPayGte,
    });
  };

  const handleSortChange = (option: 'time' | 'pay' | 'hour' | 'shop') => {
    setSortOption(option);
  };

  if (!data) return null;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[28px] font-bold">{keyword ? `${keyword}에 대한 공고목록` : '전체 공고'}</h2>
        <div className="flex items-center justify-center gap-1 mb-4 md:mb-8">
          <SortingDropdown onSelect={handleSortChange} sortOption={sortOption} />
          <DetailFilterModal onFiltersChange={handleFiltersChange} />
        </div>
      </div>
      {data.items.length > 0 ? (
        <>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-[14px] sm:gap-y-8">
            {data.items.map(({ item }) => (
              <li key={item.id}>
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
          <Pagination page={pageQuery.toString()} sliceDataValue={6} totalDataCount={pageLength} />
        </>
      ) : (
        <div className="mt-8 text-xl text-center text-gray-40">공고 목록이 존재하지 않아요.</div>
      )}
      <div />
    </>
  );
}
export default TotalRecruitList;
