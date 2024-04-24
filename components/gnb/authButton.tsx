'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useCookieToken from '@/hooks/useCookieToken';
import apiClient from '@/libs/axios';
import jwtDecode from '@/utils/jwtDecode';

import NotificationBtn from './notificationBtn';

// 더미데이터
const alertList = {
  limit: 5, // 알림 개수
  items: [
    {
      item: {
        id: '1',
        createdAt: '2024-04-18T08:00:00Z',
        result: 'accepted', // 또는 'rejected'
        shop: {
          item: {
            id: '1',
            name: 'Shop A',
            imageUrl: 'https://example.com/shop_a_image.jpg',
          },
        },
        notice: {
          item: {
            startsAt: '2024-04-18T09:00:00Z',
            workhour: 8,
          },
        },
      },
    },
    {
      item: {
        id: '2',
        createdAt: '2024-04-17T12:00:00Z',
        result: 'rejected', // 또는 'accepted'
        shop: {
          item: {
            id: '2',
            name: 'Shop B',
            imageUrl: 'https://example.com/shop_b_image.jpg',
          },
        },
        notice: {
          item: {
            startsAt: '2024-04-17T13:00:00Z',
            workhour: 6,
          },
        },
      },
    },
  ],
};

interface UserTypeProps {
  userType?: string;
}

function UserTypeLink({ userType }: UserTypeProps) {
  return userType === 'employee' ? <Link href="/my-profile">내 프로필</Link> : <Link href="/my-store">내 가게</Link>;
}

function AuthButton() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<string>();
  const token = useCookieToken();

  useEffect(() => {
    setIsLoggedIn(!!token);

    if (token) {
      const userId = jwtDecode();
      const fetchData = async () => {
        try {
          const { data } = await apiClient.get(`/users/${userId}`);
          setUserType(data.item.type);
        } catch (error) {
          console.error('Failed to fetch user data:', error);
        }
      };
      fetchData();
    }
  }, [token]);

  const handleLogout = () => {
    document.cookie = 'accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setIsLoggedIn(false);
    alert('로그아웃 됐음');
    router.push('/');
  };

  return (
    <div className="flex items-center gap-5 ml-auto font-bold text-black md:order-1">
      {isLoggedIn ? (
        <>
          <UserTypeLink userType={userType} />
          <button onClick={handleLogout}>로그아웃</button>
          <NotificationBtn alertList={alertList} />
        </>
      ) : (
        <>
          <Link href="/signin">로그인</Link>
          <Link href="/signup">회원가입</Link>
        </>
      )}
    </div>
  );
}
export default AuthButton;
