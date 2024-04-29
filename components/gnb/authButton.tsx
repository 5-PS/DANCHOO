'use client';

import Link from 'next/link';
import NotificationBtn from './notificationBtn';

import { useRouter } from 'next/navigation';
import { useToastContext } from '@/contexts/toastContext';
import { useState } from 'react';

function UserTypeLink({ userInfo }: AuthButtonProps) {
  return (
    <>
    {userInfo?.type === 'employer' && <Link href={`${userInfo?.linkUrl ? `/my-store/${userInfo.linkUrl}` : `/my-store`}`}>내가게</Link>}
    {userInfo?.type === 'employee' &&    <Link href={`/my-profile/${userInfo?.linkUrl}`}>내 프로필</Link>}
    </>
  )
}
interface AuthButtonProps {
  userInfo?: {
    type?: string; 
    linkUrl?: string;
  };
}

function AuthButton({ userInfo }:AuthButtonProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(!!userInfo)
  const router = useRouter()
  const { showToast } = useToastContext()

  const handleLogout = () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false)
    showToast('로그아웃 되었습니다.')
    router.push('/'); 
  
  };

  return (
    <div className="flex items-center gap-5 ml-auto font-bold text-black md:order-1">
      {isLoggedIn ? (
        <>
        <UserTypeLink userInfo={userInfo} />
        <button onClick={handleLogout} type="button">
          로그아웃
        </button>
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
