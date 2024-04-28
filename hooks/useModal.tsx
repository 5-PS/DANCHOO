'use client';

import { useContext } from 'react';

import { ModalSetterContext } from '@/contexts/ModalProvider';

interface UseModalProps {
  type: string;
  cancelBtnText?: string;
  submitBtnText?: string;
  content: string;
  submitFunction?: object;
}
/**
 * 객체에 담아서 각 내용을 보내면 됩니다.
 * @모달사용예시 openModal({type:'justok', content:'확인을 눌러주세요'})
 * @params필수1 {type: 'justok'} or {type: 'check'} 두가지가 있습니다.(필수)
 * @params필수2 {content : '모달에 들어갈 메세지'}
 * @parpms선택 cancelBtnText => type:check모달에서 취소버튼에 들어갈 텍스트
 * @parpms선택 submitBtnText => type:check모달에서 성공버튼에 들어갈 텍스트
 * @parpms선택 submitFunction => type:check 모달의 성공버튼을 눌렀을 때 실행할 함수
 */
function useModal() {
  const setModalState = useContext(ModalSetterContext);

  const openModal = ({ type, cancelBtnText, submitBtnText, content, submitFunction }: UseModalProps) => {
    if (setModalState) {
      setModalState({ type, cancelBtnText, submitBtnText, content, submitFunction });
    }
  };

  const closeModal = () => {
    if (setModalState) {
      setModalState({ type: null, props: null });
    }
  };

  return { openModal, closeModal };
}

export default useModal;
