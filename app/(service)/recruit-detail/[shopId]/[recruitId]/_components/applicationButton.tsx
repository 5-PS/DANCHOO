'use client';

import { useState } from 'react';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/button';
import { useToastContext } from '@/contexts/toastContext';
import { postRequest } from '@/libs/axios';

interface ApplicationButtonProps {
  isClosed: boolean;
  shopId: string;
  recruitId: string;
}

function ApplicationButton({ isClosed, shopId, recruitId }: ApplicationButtonProps) {
  const [isApplied, setIsApplied] = useState(false);
  const [applicationsId, setApplicationsId] = useState('');
  const router = useRouter();
  const { showToast } = useToastContext();
  const handleRecruitApplication = async () => {
    try {
      const { data } = await postRequest.post(`/shops/${shopId}/notices/${recruitId}/applications`);
      setApplicationsId(data.item.id);
      showToast('신청 완료!');
      setIsApplied(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) alert('공고가 마감되었습니다.');
        if (error.response?.status === 401) {
          const result = confirm('로그인이 필요합니다');
          if (result) {
            router.push('/signin');
          }
        }
        if (error.response?.status === 404) alert('존재하지 않는 공고입니다.');
      }
    }
  };

  const handleCancelApplication = async () => {
    try {
      const result = confirm('정말 취소하실건가요?');
      if (result) {
        await postRequest.put(`/shops/${shopId}/notices/${recruitId}/applications/${applicationsId}`, {
          status: 'canceled',
        });
        showToast('취소했어요');
        setIsApplied(false);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) alert('공고 지원자만 접근할 수 있습니다');
        if (error.response?.status === 404) alert('존재하지 않는 공고입니다.');
      }
    }
  };

  return (
    <Button
      background={`${isClosed ? 'bg-gray-40' : isApplied ? 'bg-white' : 'bg-primary'}`}
      className="h-[48px] font-bold"
      onClick={isApplied ? handleCancelApplication : handleRecruitApplication}
    >
      {isClosed ? '신청 불가' : isApplied ? '신청 취소' : '신청 하기'}
    </Button>
  );
}
export default ApplicationButton;
