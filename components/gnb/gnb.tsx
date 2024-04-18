import Image from 'next/image';
import Link from 'next/link';

import NotificationBtn from './notificationBtn';
import SearchBar from './searchBar';

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
function UserTypeLink({ userType }: { userType: string }) {
  return userType === 'employee' ? <Link href="/my-profile">내 프로필</Link> : <Link href="/my-store">내 가게</Link>;
}

// TODO: 로그아웃과 인증 확인 로직 만들어야 합니다
function Gnb() {
  const auth: boolean = false;
  const userType: string = 'employee';
  return (
    <header className="sticky top-0 z-10 px-5 py-3 m-auto bg-white md:p-8 w-full md:max-w-[964px]">
      <nav className="flex flex-wrap items-center gap-4 md:relative md:gap-10">
        <Link href="/">
          <Image src="/icons/logo.svg" width={112} height={40} alt="로고" />
        </Link>
        <div className="flex items-center gap-5 ml-auto font-bold text-black md:order-1">
          {auth ? (
            <>
              <UserTypeLink userType={userType} />
              <button>로그아웃</button>
              <NotificationBtn alertList={alertList} />
            </>
          ) : (
            <>
              <Link href="/signin">로그인</Link>
              <Link href="/signup">회원가입</Link>
            </>
          )}
        </div>
        <SearchBar />
      </nav>
    </header>
  );
}

export default Gnb;
