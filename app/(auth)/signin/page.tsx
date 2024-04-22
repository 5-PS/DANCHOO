import Link from 'next/link';

import SigninForm from './_components/signinForm';

export default function Signin() {
  return (
    <div className="flex flex-col items-center">
      <SigninForm />
      <p className="mt-5 text-black">
        회원이 아니신가요?{' '}
        <span className="text-[#5534DA] underline">
          <Link href="/signup">회원가입하기</Link>
        </span>
      </p>
    </div>
  );
}
