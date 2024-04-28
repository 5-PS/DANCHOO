'use client';

import { useContext, useEffect, useRef } from 'react';

import Image from 'next/image';

import { ModalStateContext } from '@/contexts/ModalProvider';
import useModal from '@/hooks/useModal';

import useOutSideClick from '../../hooks/useOutSideClick';
import Button from '../button/button';

export default function CautionModal() {
  const { content } = useContext(ModalStateContext);

  const modalRef = useRef(null);
  const { closeModal } = useModal();

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
        <div className=" w-[298px] h-[183px] border rounded-xl flex items-center justify-center flex-col">
          <div className="bg-primary w-[24px] h-[24px] rounded-full flex items-center justify-center absolute top-7">
            <Image src="/icons/modal-issue.svg" alt="." width={25} height={25} />
          </div>
          <p className="h-12 absolute top-17 text-base text-center font-medium w-[250px] line-clamp-2">{content}</p>
          <div className="mt-8 ">
            <div className="w-[80px] absolute right-[106px] bottom-4">
              <Button background="bg-white" onClick={closeModal} className="font-bold h-9">
                확인
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
