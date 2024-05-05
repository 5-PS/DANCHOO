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
    <div className="max-w-[957px] m-auto">
      <h2 className="font-bold text-[28px] px-[32px] mb-10">{title}</h2>
      <div>
        <div className="flex flex-col gap-6 items-center justify-center h-10 border rounded py-[120px]">
          <p>{desc}</p>
          <Link href={href}>
            <Button background="bg-primary" className="h-10 px-10 text-sm ">
              {btnText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Empty;
