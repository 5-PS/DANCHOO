'use client';

import { useQuery } from '@tanstack/react-query';

import DetailFilterModal from '@/components/filterModal/detailFilterModal';
import Pagination from '@/components/pagination/pagination';
import Post from '@/components/post/post';
import SortingDropdown from '@/components/sortingDropdown/sortingDropdown';
import { getNotices } from '@/services/api';

function TotalRecruitList({ searchParams }) {
  const { data } = useQuery({ queryKey: ['notices'], queryFn: getNotices });
  if (!data) return null;

  const sliceIndex = data.offset;
  const pageLength = data.count;
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-[28px] font-bold">전체 공고</h2>
        <div className="flex items-center mb-4 md:mb-8">
          <div className="w-[105px] h-[30px]">
            <SortingDropdown />
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
      <Pagination page={searchParams.page} sliceDataValue={6} totalDataCount={pageLength} />
      <div />
    </>
  );
}
export default TotalRecruitList;
