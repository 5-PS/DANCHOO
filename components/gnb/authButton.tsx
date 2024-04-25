'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import useCookieToken from '@/hooks/useCookieToken';
import apiClient from '@/libs/axios';
import jwtDecode from '@/utils/jwtDecode';

import NotificationBtn from './notificationBtn';

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
          <NotificationBtn />
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
