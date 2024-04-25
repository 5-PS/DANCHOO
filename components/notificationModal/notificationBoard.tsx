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
  return (
    <div className="flex flex-col gap-4 px-5 py-6 bg-red-10 bg-full md:max-w-[328px] shadow-modal-box border border-gray-200 md:rounded-xl h-screen md:h-fit">
      <div className="flex justify-between align-middle">
        <h2 className="text-xl font-bold">{`알림 ${count}개`}</h2>
        <button type="button" onClick={onClose} className="block md:hidden">
          <Image src={close} alt="닫기 버튼" />
        </button>
      </div>
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
            />
          );
        })}
      </ul>
    </div>
  );
}
export default NotificationBoard;
