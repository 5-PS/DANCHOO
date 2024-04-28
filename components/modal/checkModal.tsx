'use client';

import { useContext, useEffect, useRef } from 'react';

import Image from 'next/image';

import { ModalStateContext } from '@/contexts/ModalProvider';
import useModal from '@/hooks/useModal';

import useOutSideClick from '../../hooks/useOutSideClick';
import Button from '../button/button';

export default function CheckModal() {
  const modalRef = useRef(null);
  const { closeModal } = useModal();
  const { cancelBtnText, submitBtnText, content, submitFunction } = useContext(ModalStateContext);

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
        <div className=" w-[298px] h-[183px] border rounded-xl flex items-center justify-center flex-col">
          <div className="bg-primary w-[24px] h-[24px] rounded-full flex items-center justify-center">
            <Image src="/icons/modal-check.svg" alt="." width={19} height={19} />
          </div>
          <p className="mt-4 text-base font-medium">{content}</p>
          <div className="flex gap-2 mt-8">
            <div className="w-[80px]">
              <Button
                className="font-bold h-9"
                background="bg-white"
                onClick={closeModal} // 취소
              >
                {cancelBtnText}
              </Button>
            </div>
            <div className="w-[80px]">
              <Button
                className="font-bold h-9"
                background="bg-primary"
                onClick={handleButtonClick} // submit
              >
                {submitBtnText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
