'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/button/button';
import useRecruitActions from '@/hooks/useRecruitActions';
import { useRouter } from 'next/navigation';

interface ApplicationButtonProps {
  isClosed: boolean;
  shopId: string;
  recruitId: string;
  recruitStatus?:{
    value: string;
  }
  userId: string;
}

function ApplicationButton({ isClosed, shopId, recruitId, recruitStatus, userId }: ApplicationButtonProps) {
  const router = useRouter()
  const [isApplied, setIsApplied] = useState(recruitStatus?.value === `pending_${userId}`);
  const { applyRecruit, cancelRecruit, user, openModal } = useRecruitActions(shopId, recruitId, userId)

  const handleRecruitActions = () => {
    if (!user) {
      openModal({
        type: 'caution',
        content: '로그인이 필요합니다.',
        submitFunction: () => {
          router.push('/signin');
        },
      });
      return
    }
    if (user.type === 'employer') {
      openModal({ type: 'caution', content: '기업회원은 신청 할 수 없습니다.' });
      return;
    }
    if (!user.name) {
      openModal({ 
        type: 'caution', 
        content: '내 프로필을 먼저 등록해 주세요!' ,
        submitFunction: () => {
          router.push(`/my-profile/${user.id}/edit`);
      },});
      return;
    }
    if (!isApplied) {
      applyRecruit();
      setIsApplied(true);
    } else {
      openModal({
        type: 'check',
        cancelBtnText: '아니오',
        submitBtnText: '예',
        content: '신청을 취소하시겠어요?',
        submitFunction: () => {
          cancelRecruit();
        setIsApplied(false);
        },
      });
    }
  }

  return (
    <Button
      background={`${isClosed ? 'bg-gray-40' : isApplied ? 'bg-white' : 'bg-primary'}`}
      className="h-[48px] font-bold"
      onClick={handleRecruitActions}
    >
      {isClosed ? '신청 불가' : isApplied ? '신청 취소' : '신청 하기'}
    </Button>
  );
}
export default ApplicationButton;