'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function LinkMyStore() {
  const { storeId } = useParams();
  return (
    <Link href={`/my-store/${storeId}`} className="relative w-6 h-6 md:w-8 md:h-8">
      <Image src="/icons/close-modal-icon.svg" fill alt="이전버튼" />
    </Link>
  );
}
