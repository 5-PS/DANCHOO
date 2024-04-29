'use client';

import Post from '@/components/post/post';

import { NoticeDataType, StoreDataType } from './myStoreCard';
/**
 * @todo 내용 카드로 변경
 * @todo address,name,originalHourlyPay 은 기업 정보에서 가져오게 되는데 프롭으로?
 */
interface HaveRegisteredNoticeType {
  noticeData: NoticeDataType[];
  storeData: StoreDataType;
  storeId: string;
}

export default function HaveRegisteredNotice({ noticeData, storeData, storeId }: HaveRegisteredNoticeType) {
  return (
    <div className="flex justify-center w-full px-6 pt-10 pb-20 bg-neutral-50 md:pt-[60px] md:pb-[120px]">
      <div className="w-[351px] md:w-[678px]  xl:w-[964px]">
        <h2 className="w-auto text-gray-900 text-xl font-bold font-['Spoqa Han Sans Neo'] pl-4">내가 등록한 공고</h2>
        <div className="grid grid-cols-2 gap-4 p-4 xl:grid-cols-3">
          {noticeData.map(({ item },idx) => (
            <Post
              key={idx}
              href={`/my-store/${storeId}/my-recruits/${item.id}`}
              address={storeData.address1}
              imageUrl={storeData.imageUrl}
              name={storeData.name}
              hourlyPay={item.hourlyPay}
              originalHourlyPay={storeData.originalHourlyPay}
              startsAt={item.startsAt}
              workhour={item.workhour}
              closed={item.closed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
/**
 * @todo 등록된 공고 있을 때
 */
