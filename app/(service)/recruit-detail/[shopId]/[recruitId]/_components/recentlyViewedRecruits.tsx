'use client';

import { useEffect, useState } from 'react';

import Post from '@/components/post/post';

function RecentlyViewedRecruits() {
  const [recentlyViewedRecruits, setRecentlyViewedRecruits] = useState([]);

  useEffect(() => {
    const storedRecruits = JSON.parse(sessionStorage.getItem('recentlyViewedRecruits') || '[]');
    setRecentlyViewedRecruits(storedRecruits);
  }, []);
  return (
    <ul className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-x-[14px] md:gap-y-8 xl:grid-cols-3">
      {recentlyViewedRecruits?.map((list) => (
        <li key={list.id}>
          <Post
            id={list.id}
            shopId={list.shopId}
            address={list.address}
            imageUrl={list.imageUrl}
            name={list.name}
            hourlyPay={list.hourlyPay}
            originalHourlyPay={list.originalHourlyPay}
            startsAt={list.startsAt}
            workhour={list.workhour}
            closed={list.closed}
          />
        </li>
      ))}
    </ul>
  );
}
export default RecentlyViewedRecruits;
