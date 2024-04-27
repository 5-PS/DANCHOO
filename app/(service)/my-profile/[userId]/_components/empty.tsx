import Link from 'next/link';

import Button from '@/components/button/button';

interface EmptyProps {
  title: string;
  desc: string;
  btnText: string;
  href: string;
}

function Empty({ title, desc, btnText, href }: EmptyProps) {
  return (
    <div className="max-w-[957px] m-auto  py-[60px]">
      <h2 className="font-bold text-[28px] px-[32px] mb-10">{title}</h2>
      <div className="px-[32px]">
        <div className="flex flex-col gap-6 items-center justify-center h-10 border rounded py-[60px]">
          <p>{desc}</p>
          <Link href={href}>
            <Button background="bg-white">{btnText}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Empty;
