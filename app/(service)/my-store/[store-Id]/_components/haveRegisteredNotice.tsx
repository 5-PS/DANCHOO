'use client';

import Post from '@/components/post/post';

import { item } from './가게정보.json';
import { items } from './공고.json';

/**
 * @todo 내용 카드로 변경
 * @todo address,name,originalHourlyPay 은 가게정보에서 가져오게 되는데 프롭으로?
 */
export default function HaveRegisteredNotice() {
  return (
    <div className="flex justify-center w-full px-6 pt-10 pb-20 bg-neutral-50 md:pt-[60px] md:pb-[120px]">
      <div className="w-[351px] md:w-[678px]  xl:w-[964px]">
        <h2 className="w-auto text-gray-900 text-xl font-bold font-['Spoqa Han Sans Neo'] pl-4">
          내가 등록한 공고 테스트
        </h2>
        <div className="grid grid-cols-2 gap-4 p-4 xl:grid-cols-3">
          {items.map((it) => (
            <Post
              href={it.links[0].href}
              address={item.address1}
              imageUrl=""
              name={item.name}
              hourlyPay={it.item.hourlyPay} // 흠 왜오류
              originalHourlyPay={item.originalHourlyPay}
              startsAt={it.item.startsAt}
              workhour={it.item.workhour}
              closed={it.item.closed}
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
