'use client';

import { useContext, useEffect, useRef } from 'react';

import Image from 'next/image';

import { ModalStateContext } from '@/contexts/ModalProvider';
import useModal from '@/hooks/useModal';

import useOutSideClick from '../../hooks/useOutSideClick';
import Button from '../button/button';

export default function NoticeModal() {
  const { content,submitFunction = ()=>{} } = useContext(ModalStateContext);

  const modalRef = useRef(null);
  const { closeModal } = useModal();

  const handleButtonClick = ()=>{
    submitFunction();
    closeModal();
  }

  useEffect(() => {
    const $body = document.querySelector('body');

    if (!$body) {
      throw new Error('body element is not found');
    }

    const { overflow } = $body.style;
    $body.style.overflow = 'hidden';
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  useOutSideClick(modalRef, closeModal);
  return (
    <div className="fixed inset-0 flex bg-gray-500 bg-opacity-50  z-[999]">
      <div
        className="fixed transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg top-1/2 left-1/2"
        ref={modalRef}
      >
        <div className=" w-[298px] md:w-[540px] h-[183px] md:h-[250px] border rounded-xl flex items-center justify-center flex-col">

          <p className="absolute top-9 text-base text-center font-medium w-[250px] md:w-[480px] md:top-20 line-clamp-3">{content}</p>

            <div className="w-[120px]  absolute right-22 bottom-3 md:right-10 md:bottom-8">
              <Button background="bg-primary" onClick={handleButtonClick} className="h-10 font-bold ">
                확인
              </Button>
            </div>

        </div>
      </div>
    </div>
  );
}
