'use client';

import { useEffect, useState } from 'react';

import { AxiosError } from 'axios';
import Image from 'next/image';

import { postRequest } from '@/libs/axios';
import jwtDecode from '@/utils/jwtDecode';

import NotificationBoard from '../notificationModal/notificationBoard';

interface AlertItem {
  item: {
    id: string;
    createdAt: string;
    result: 'accepted' | 'rejected';
    read: boolean;
    shop: {
      item: {
        id: string;
        name: string;
      };
    };
    notice: {
      item: {
        startsAt: string;
        workhour: number;
      };
    };
  };
}
interface NotificationBoardProps {
  count: number;
  items: AlertItem[];
}

function NotificationBtn() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [alertList, setAlertList] = useState<NotificationBoardProps>({ count: 0, items: [] });

  useEffect(() => {
    const userId = jwtDecode();
    const fetchData = async () => {
      try {
        const { data } = await postRequest.get(`/users/${userId}/alerts`);
        setAlertList(data);
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
        {true ? (
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
