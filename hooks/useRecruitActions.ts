import { useToastContext } from '@/contexts/toastContext';
import { getUserApplyList, getUserProfile, postApplyRecruit, putCancelRecruit } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import useModal from './useModal';

interface RecruitType {
  items: [
    {
      item: {
        id: string;
        status: 'pending' | 'accepted' | 'rejected' | 'canceled';
        notice: {
          item: {
            id: string;
          };
        };
      };
    },
  ];
}

const useRecruitActions = (shopId: string, recruitId: string, userId: string) => {
  const [applicationsId, setApplicationsId] = useState('');
  const { showToast } = useToastContext();
  const { openModal } = useModal();
  const { data } = useQuery({ queryKey: ['userInfo'], queryFn: () => getUserProfile(userId), enabled: !!userId });
  const { data: status, refetch } = useQuery<RecruitType>({
    queryKey: ['applyStatus'],
    queryFn: () => getUserApplyList(data?.item.id),
  });
  const user = data?.item;

  const handleAxiosError = (error: AxiosError) => {
    if (error instanceof AxiosError) {
      switch (error.response?.status) {
        case 400:
          openModal({ type: 'caution', content: '공고가 마감되었습니다.' });
          break;
        case 404:
          openModal({ type: 'caution', content: '존재하지 않는 공고입니다.' });
          break;
        default:
          openModal({ type: 'caution', content: '오류가 발생했습니다.' });
      }
    }
  };

  useEffect(() => {
    if (status) {
      const applyRecruitId = status?.items.filter((state) => state.item.notice.item.id === recruitId);
      if (applyRecruitId && applyRecruitId[0]?.item?.status === 'pending') {
        setApplicationsId(applyRecruitId[0]?.item.id);
      }
    }
  }, [status]);

  const { mutate: applyRecruit } = useMutation({
    mutationFn: () => postApplyRecruit(shopId, recruitId),
    onSuccess: (data) => {
      document.cookie = `recruit_${recruitId}=${data.item.status}; Path=/; Max-Age=8640000; Secure; SameSite=Strict`;
      showToast('신청 완료!');
    },
    onError: (error: AxiosError) => handleAxiosError(error),
  });

  const { mutate: cancelRecruit } = useMutation({
    mutationFn: () => putCancelRecruit(shopId, recruitId, applicationsId),
    onSuccess: () => {
      showToast('취소했어요');
      document.cookie = `recruit_${recruitId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
    onError: (error: AxiosError) => handleAxiosError(error),
  });

  return { applyRecruit, cancelRecruit, user, openModal };
};

export default useRecruitActions;
