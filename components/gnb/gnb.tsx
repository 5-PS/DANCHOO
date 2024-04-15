import Image from 'next/image';
import Link from 'next/link';

function SearchBar() {
  return (
    <div className="flex justify-start items-center gap-[10px] p-[10px] bg-gray-10 rounded-xl w-[344px] lg:w-[450px] max-[768px]:search">
      <Image src="/icons/search.svg" width={20} height={20} alt="돋보기" />
      <input
        className="w-full outline-none bg-gray-10 placeholder:text-gray-40 placeholder:text-sm"
        type="text"
        placeholder="가게 이름으로 찾아보세요"
      />
    </div>
  );
}

function Authenticated({ userType }: { userType: string }) {
  return (
    <div className="flex items-center justify-start gap-4 font-bold text-black max-[768px]:buttons">
      {userType === 'employer' && <Link href="/myshop">내가게</Link>}
      {userType === 'employee' && <Link href="/profile">내 프로필</Link>}
      <Link href="/logout">로그아웃</Link>
      <button>
        <Image src="/icons/notification_inactive.svg" width={20} height={20} alt="알림" />
      </button>
    </div>
  );
}

function UnAuthenticated() {
  return (
    <div className="flex items-center justify-start gap-10 font-bold text-black max-[768px]:buttons">
      <Link href="/signin">로그인</Link>
      <Link href="/signup">회원가입</Link>
    </div>
  );
}

interface GnbProps {
  isAuthenticated: boolean;
  userType: string;
}
// FIXME: 로그인 유저 상태관리 만들면 좀 많이 손 봐야함
function Gnb({ isAuthenticated, userType }: GnbProps) {
  return (
    <nav className="sticky top-0 z-10 px-8 py-4 bg-white">
      <div className="flex items-center justify-between max-w-5xl m-auto max-[768px]:gnb">
        <Link className="max-[768px]:logo" href="/">
          <Image src="/icons/logo.svg" width={112} height={40} alt="로고" />
        </Link>

        <SearchBar />

        {isAuthenticated ? <Authenticated userType={userType} /> : <UnAuthenticated />}
      </div>
    </nav>
  );
}

export default Gnb;
