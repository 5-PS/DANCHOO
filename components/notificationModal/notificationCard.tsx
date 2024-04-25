'use client';

import { Dispatch, useState } from 'react';

import { formatDistanceToNowStrict, parseISO as parseDate } from 'date-fns';
import { ko } from 'date-fns/locale';

import { putAlertRead } from '@/services/api';
import formatDateRange from '@/utils/formatDateRange';
import jwtDecode from '@/utils/jwtDecode';

interface NotificationCardProps {
  alertId: string;
  createdAt: string;
  result: string;
  shop: {
    name: string;
  };
  notice: {
    startsAt: string;
    workhour: number;
  };
  setCurrentCount: Dispatch<React.SetStateAction<number>>;
}

function NotificationCard({ alertId, createdAt, result, shop, notice, setCurrentCount }: NotificationCardProps) {
  const [isRead, setIsRead] = useState(false);
  const elapsedTime = formatDistanceToNowStrict(parseDate(createdAt), { locale: ko });
  const { startsAt, workhour } = notice;

  const handleAlertRead = async () => {
    const userId = jwtDecode();
    await putAlertRead(userId, alertId);
    setCurrentCount((prev) => prev - 1);
    setIsRead(true);
  };

  return (
    !isRead && (
      <li className="flex flex-col gap-1 px-3 py-4 bg-white border border-gray-200 rounded-md ">
        <button className="text-left" onClick={handleAlertRead}>
          <div className={`w-[5px] h-[5px] ${result === 'accepted' ? 'bg-blue-20' : 'bg-red-40'} rounded-full`} />
          <p className="text-sm">
            {shop.name}
            {formatDateRange(startsAt, workhour)}
            공고 지원이
            {result === 'accepted' ? (
              <span className="text-blue-20"> 승인</span>
            ) : (
              <span className="text-red-40"> 거절</span>
            )}
            되었어요.
          </p>
          <span className="text-xs text-gray-40">{`${elapsedTime} 전`}</span>
        </button>
      </li>
    )
  );
}
export default NotificationCard;
