import Image from 'next/image';

import closeIcon from '@/public/icons/toast-close.svg';

interface ToastProps {
  message: string;
  isShouldRender: boolean;
  isShown: boolean;
  startHidingToast: () => void;
}

export default function Toast({ message, isShouldRender, isShown, startHidingToast }: ToastProps) {
  return (
    isShouldRender && (
      <div
        className={`py-[10px] px-4 opacity-80 flex items-center justify-between fixed w-96 h-16 bottom-8 left-1/2 translate-x-[-50%] bg-blue-300 leading-[26px] rounded-[5px] text-white ${isShown ? 'animate-slideUp' : 'animate-slideDown'}`}
      >
        <div>{message}</div>
        <button onClick={startHidingToast}>
          <Image src={closeIcon} alt="close icon" width={15} height={15} />
        </button>
      </div>
    )
  );
}
