'use client';

import { useState } from 'react';

import Image from 'next/image';

import close from '@/public/icons/close.svg';
import { AlertItem } from '@/types/notification';

import NotificationCard from './notificationCard';

interface NotificationBoardProps {
  onClose: () => void;
  alertList: {
    count: number;
    items: AlertItem[];
  };
}

function NotificationBoard({ onClose, alertList }: NotificationBoardProps) {
  const { count, items } = alertList;
  const [currentCount, setCurrentCount] = useState(count);

  return (
    <div className="flex flex-col gap-4 px-5 py-6 bg-red-10 bg-full md:max-w-[328px] shadow-modal-box border border-gray-200 md:rounded-xl h-screen md:h-fit">
      <div className="flex justify-between align-middle">
        <h2 className="text-xl font-bold">{`알림 ${currentCount}개`}</h2>
        <button type="button" onClick={onClose} className="block md:hidden">
          <Image src={close} alt="닫기 버튼" />
        </button>
      </div>
      {currentCount > 0 ? (
        <ul className="flex flex-col gap-2">
          {items.map(({ item }) => {
            const {
              id,
              createdAt,
              result,
              shop: { item: shopItem },
              notice: { item: noticeItem },
            } = item;
            return (
              <NotificationCard
                key={id}
                alertId={id}
                createdAt={createdAt}
                result={result}
                shop={shopItem}
                notice={noticeItem}
                setCurrentCount={setCurrentCount}
              />
            );
          })}
        </ul>
      ) : (
        <p className="text-center text-gray-500 px-14">알림이 없습니다</p>
      )}
    </div>
  );
}
export default NotificationBoard;
