'use client';

import { useState } from 'react';
import Button from '@/components/button/button';
import useRecruitActions from '@/hooks/useRecruitActions';

interface ApplicationButtonProps {
  isClosed: boolean;
  shopId: string;
  recruitId: string;
}

function ApplicationButton({ isClosed, shopId, recruitId }: ApplicationButtonProps) {

  const [isApplied, setIsApplied] = useState(false);
  const { applyRecruit, cancelRecruit, type } = useRecruitActions(shopId, recruitId)

  const handleRecruitActions = () => {
    if (type === 'employee') {
      if (!isApplied) {
        applyRecruit()
        setIsApplied(true)
      } else {
        const result = confirm('신청을 취소하시겠습니까?')
        if (result){
          cancelRecruit()
          setIsApplied(false)
        }
      }
    }
    if (type === 'employer') alert('사장님은 신청못합니다!')

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
