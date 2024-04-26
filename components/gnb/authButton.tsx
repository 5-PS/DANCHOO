'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { apiClient } from '@/libs/axios';
import { decodeJWT, getCookie } from '@/utils/getCookie';

import NotificationBtn from './notificationBtn';

interface BoxProps {
  userId?: string;
  type?: string;
  shopId?: string;
}

function UserTypeLink({ userType }: { userType: BoxProps }) {
  return userType.type === 'employer' ? (
    <Link href={`${userType?.shopId ? `/my-store/${userType.shopId}` : `/my-store`}`}>내가게</Link>
  ) : (
    <Link href="/my-profile">내 프로필</Link>
  );
}

const getUser = async (userId: any) => apiClient.get(`/users/${userId}`);

function UserContentBox({ userId, logout }: { userId?: string; logout: any }) {
  const { data } = useQuery({ queryKey: ['userInfo1'], queryFn: () => getUser(userId) });

  const userInfo: BoxProps = {
    userId: data?.data.item.id,
    type: data?.data.item.type,
    shopId: data?.data.item.shop?.item.id,
  };

  return (
    <>
      <UserTypeLink userType={userInfo} />
      <button onClick={logout} type="button">
        로그아웃
      </button>
      <NotificationBtn />
    </>
  );
}

function AuthButton() {
  const router = useRouter();
  const [token, setToken] = useState<string | undefined>('');
  const userId = token && decodeJWT(token);
  const handleLogout = () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setToken('');
    alert('로그아웃 되었습니다');
    router.push('/');
  };
  useEffect(() => {
    const accessToken = getCookie('accessToken');
    setToken(accessToken);
  }, []);

  return (
    <div className="flex items-center gap-5 ml-auto font-bold text-black md:order-1">
      {token ? (
        <UserContentBox userId={userId} logout={handleLogout} />
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
