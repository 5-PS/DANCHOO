import Link from 'next/link';

import ROUTE_PATHS from '@/constants/route';

import SigninForm from './_components/signinForm';

export default function Signin() {
  return (
    <div className="flex flex-col items-center">
      <SigninForm />
      <p className="mt-5 text-black">
        회원이 아니신가요?{' '}
        <span className="text-[#5534DA] underline">
          <Link href={ROUTE_PATHS.SIGN_UP}>회원가입하기</Link>
        </span>
      </p>
    </div>
  );
}
