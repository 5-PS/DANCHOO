'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/button/button';
import useRecruitActions from '@/hooks/useRecruitActions';
import { useRouter } from 'next/navigation';

interface ApplicationButtonProps {
  isClosed: boolean;
  shopId: string;
  recruitId: string;
}

function ApplicationButton({ isClosed, shopId, recruitId }: ApplicationButtonProps) {
  const router = useRouter()
  const [isApplied, setIsApplied] = useState(false);
  const { applyRecruit, cancelRecruit, user, status } = useRecruitActions(shopId, recruitId)

  useEffect(() => {
    const applyStatus = status?.items.filter((state) => state.item.notice.item.id === recruitId);
    if (applyStatus && applyStatus[0]?.item?.status === 'pending') {
      setIsApplied(true);
    } else {
      setIsApplied(false);
    }
  }, [status, recruitId]);

  const handleRecruitActions = () => {
    if (!user) {
      alert('로그인이 필요합니다');
      router.push('/signin');
      return;
    }
    if (user.type === 'employer') {
      alert('사장님은 신청못합니다!');
      return;
    }
    if (!user.name) {
      alert('프로필을 등록해 주세요');
      router.push(`/my-profile/${user.id}/edit`);
      return;
    }
    if (!isApplied) {
      applyRecruit();
      setIsApplied(true);
    } else {
      const result = confirm('신청을 취소하시겠습니까?');
      if (result) {
        cancelRecruit();
        setIsApplied(false);
      }
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
