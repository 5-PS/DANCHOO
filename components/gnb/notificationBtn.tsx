'use client';

import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import Image from 'next/image';

import { postRequest } from '@/libs/axios';
import { AlertItem } from '@/types/notification';
import jwtDecode from '@/utils/decodeJWT';

import NotificationBoard from '../notificationModal/notificationBoard';

interface AlertList {
  count: number;
  items: AlertItem[];
}

function NotificationBtn() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [alertList, setAlertList] = useState<AlertList>({ count: 0, items: [] });

  useEffect(() => {
    const userId = jwtDecode();
    const fetchData = async () => {
      try {
        if (userId) {
        const { data } = await postRequest.get(`/users/${userId}/alerts`);
        const unreadAlerts = data.items.filter((item: { item: { read: boolean } }) => !item.item.read);
        setAlertList({ count: unreadAlerts.length, items: unreadAlerts })
      }
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data.message;
          alert(errorMessage);
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <button onClick={() => setIsNotificationOpen((prev) => !prev)}>
        {alertList.count ? (
          <Image src="/icons/notification-active.svg" width={20} height={20} alt="알림 아이콘" />
        ) : (
          <Image src="/icons/notification-inactive.svg" width={20} height={20} alt="알림 아이콘" />
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
