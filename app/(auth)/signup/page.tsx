import Link from 'next/link';

import ROUTE_PATHS from '@/constants/route';

import SignUpForm from './_components/signupForm';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center">
      <SignUpForm />
      <p className="mt-5 text-black">
        이미 가입하셨나요?{' '}
        <Link href={ROUTE_PATHS.SIGN_IN} className="text-[#5534DA] underline">
          로그인하기
        </Link>
      </p>
    </div>
  );
}
