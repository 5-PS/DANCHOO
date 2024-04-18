'use client';

import { useState } from 'react';

import Image from 'next/image';

import NotificationBoard from '../notificationModal/notificationBoard';

// TODO 알람 읽었는지 확인하는 로직 추가 해야함
function NotificationBtn({ alertList }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const read = false;
  return (
    <>
      <button onClick={() => setIsNotificationOpen((prev) => !prev)}>
        {read ? (
          <Image src="/icons/notification-inactive.svg" width={20} height={20} alt="알림 아이콘" />
        ) : (
          <Image src="/icons/notification-active.svg" width={20} height={20} alt="알림 아이콘" />
        )}
      </button>
      {isNotificationOpen && (
        <div className="fixed inset-0 md:absolute md:right-0 md:top-12 md:left-auto">
          <NotificationBoard onClose={() => setIsNotificationOpen(false)} alertList={alertList} />
        </div>
      )}
    </>
  );
}
export default NotificationBtn;
