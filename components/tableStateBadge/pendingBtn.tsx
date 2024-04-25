'use client';

import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';

import { requestAccepteRecruit, requestRejecteRecruit } from '@/services/api';

interface PendingBtnProps {
  applicationsId?: string;
}
export default function PendingBtn({ applicationsId }: PendingBtnProps) {
  const router = useRouter();
  const params = useParams();
  const apiId = {
    storeId: params['store-Id'],
    recruitId: params.recruitId,
    applicationsId,
  };

  const btnStyle =
    'px-[12px] py-[8px] text-[12px] border md:text-[14px] md:px-[20px] md:py-[10px] rounded-[6px] md:font-bold';
  // TODO: 거절, 승인 이벤트 달아주기
  const handleAcceptedBtnEvent = async () => {
    alert('승인 하시겠습니까?');
    try {
      await requestAccepteRecruit(apiId);
      alert('승인이 완료되었습니다');
      router.refresh();
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data.message);
      }
    }
  };
  const handleRejectedBtnEvent = async () => {
    alert('거절 하시겠습니까?');
    try {
      await requestRejecteRecruit(apiId);
      alert('거절이 완료되었습니다');
      router.refresh();
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err.response?.data.message);
      }
    }
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
