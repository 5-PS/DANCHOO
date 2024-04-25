'use client';

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
}

function NotificationCard({ alertId, createdAt, result, shop, notice }: NotificationCardProps) {
  const elapsedTime = formatDistanceToNowStrict(parseDate(createdAt), { locale: ko });
  const { startsAt, workhour } = notice;
  const handleAlertRead = () => {
    const userId = jwtDecode();
    putAlertRead(userId, alertId);
  };
  return (
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
  );
}

export default NotificationCard;
