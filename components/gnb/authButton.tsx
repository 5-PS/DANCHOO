'use client';

import { useEffect, useState } from 'react';


import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { apiClient } from '@/libs/axios';
import { decodeJWT, getCookie } from '@/utils/getCookie';

import NotificationBtn from './notificationBtn';
import { useToastContext } from '@/contexts/toastContext';
import { useQueryClient } from '@tanstack/react-query';

interface BoxProps {
  type ?: string;
  linkUrl ?: string;
}

 
function UserTypeLink({ user }: { user: BoxProps }) {
  return (
    <>
    {user?.type === 'employer' && <Link href={`${user?.linkUrl ? `/my-store/${user.linkUrl}` : `/my-store`}`}>기업 정보</Link>}
    {user?.type === 'employee' &&    <Link href={`/my-profile/${user?.linkUrl}`}>내 프로필</Link>}
    </>
  )
}

export const getUser = async (userId: any) => apiClient.get(`/users/${userId}`);

function UserContentBox({ userId, logout }: { userId?: string; logout: any }) {
  const [user, setUser] = useState<any>(null);

 
  useEffect(() => {
    const getUserData = async (id ?: string)  => {
      const {data} = await getUser(id);
      const userInfo = {
        type : data.item.type,
        linkUrl : data.item.type === 'employer' ? data.item.shop?.item.id : data.item.id,
      }
      setUser(userInfo);
    }
    getUserData(userId);

  },[])

  return (
    <>
      <UserTypeLink user={user} />
      <button onClick={logout} type="button">
        로그아웃
      </button>
      <NotificationBtn />
    </>
  );
}

function AuthButton() {
  const router = useRouter();
  const [token, setToken] = useState<any>('');
  const userId = token && decodeJWT(token);
  const { showToast } = useToastContext()
  const queryClient = useQueryClient();

  const handleLogout = () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setToken('');
    showToast('로그아웃 되었습니다');
    router.push('/');
    queryClient.removeQueries({queryKey:['userInfo'], type: 'inactive'});
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
