'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CloseButton(){

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return(
    <button onClick={goBack} className="relative w-6 h-6 md:w-8 md:h-8">
      <Image src="/icons/close-modal-icon.svg" fill alt="이전버튼" />
    </button>
  )
}