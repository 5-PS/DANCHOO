import { useToastContext } from '@/contexts/toastContext';
import { getDetailRecruit, getUserApplyList, postApplyRecruit, putCancelRecruit } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useModal from './useModal';

interface UserType {
  data: {
    item: {
      id: string;
      type: string;
      name: string;
    };
  };
}

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

const useRecruitActions = (shopId: string, recruitId: string) => {
  const [applicationsId, setApplicationsId] = useState('');
  const { showToast } = useToastContext();
  const { openModal } = useModal();
  const router = useRouter();
  const { data } = useQuery<UserType>({ queryKey: ['userInfo1'] });
  const { data: status, refetch } = useQuery<RecruitType>({
    queryKey: ['applyStatus'],
    queryFn: () => getUserApplyList(data?.data.item.id),
  });
  const user = data?.data.item;

  const handleAxiosError = (error: AxiosError, router: AppRouterInstance, showToast: (_msg: string) => void) => {
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
      showToast('신청 완료!');
      document.cookie = `recruit_${recruitId}=${data.item.status}; Path=/; Max-Age=8640000; Secure; SameSite=Strict`;
      refetch();
    },
    onError: (error: AxiosError) => handleAxiosError(error, router, showToast),
  });

  const { mutate: cancelRecruit } = useMutation({
    mutationFn: () => putCancelRecruit(shopId, recruitId, applicationsId),
    onSuccess: () => {
      showToast('취소했어요');
      document.cookie = `recruit_${recruitId}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    },
    onError: (error: AxiosError) => handleAxiosError(error, router, showToast),
  });

  return { applyRecruit, cancelRecruit, user, status, openModal };
};

export default useRecruitActions;
