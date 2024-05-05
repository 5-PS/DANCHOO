'use client';

import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';

import { requestAccepteRecruit, requestRejecteRecruit } from '@/services/api';
import useModal from '@/hooks/useModal';

interface PendingBtnProps {
  applicationsId?: string;
}
export default function PendingBtn({ applicationsId }: PendingBtnProps) {
  const router = useRouter();
  const params = useParams();
  const apiId = {
    storeId: params.storeId,
    recruitId: params.recruitId,
    applicationsId,
  };
  const {openModal} = useModal();
  const btnStyle =
    'px-[12px] py-[8px] text-[12px] border md:text-[14px] md:px-[20px] md:py-[10px] rounded-[6px] md:font-bold';


  const handleAcceptedEvent = async () => {
    try {
      await requestAccepteRecruit(apiId);
      router.refresh();
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message ? err.response?.data.message : '다시 시도해 주세요';
        openModal({type:'caution', content : errorMessage})
      }
    }
  }
  const handleRejectedEvent = async () => {
    try {
      await requestRejecteRecruit(apiId);
      router.refresh();
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message ? err.response?.data.message : '다시 시도해 주세요';
        openModal({type:'caution', content : errorMessage})
      }
    }
  }
  const handleAcceptedBtnEvent =  () => {
    openModal({type : 'check' , content : '신청을 승인하시겠어요?', cancelBtnText : '아니요', submitBtnText : '예', submitFunction :handleAcceptedEvent })
  };
  const handleRejectedBtnEvent = async () => {
    openModal({type : 'check' , content : '신청을 거절하시겠어요?', cancelBtnText : '아니요', submitBtnText : '예',submitFunction :handleRejectedEvent })

  };
  return (
    <div className="flex gap-3">
      <button type="button" className={`${btnStyle} border-red-500 text-red-500`} onClick={handleRejectedBtnEvent}>
        거절하기
      </button>
      <button type="button" className={`${btnStyle} border-blue-20 text-blue-20`} onClick={handleAcceptedBtnEvent}>
        승인하기
      </button>
    </div>
  );
}
