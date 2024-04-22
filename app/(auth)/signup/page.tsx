import Link from 'next/link';

import SignUpForm from './_components/signupForm';

export default function SignUp() {
  return (
    <div className="flex flex-col items-center">
      <SignUpForm />
      <p className="mt-5 text-black">
        이미 가입하셨나요?{' '}
        <span className="text-[#5534DA] underline">
          <Link href="/signin">로그인하기</Link>
        </span>
      </p>
    </div>
  );
}
