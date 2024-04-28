import { useToastContext } from '@/contexts/toastContext';
import { getUserApplyList, postApplyRecruit, putCancelRecruit } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const router = useRouter();
  const { data } = useQuery<UserType>({ queryKey: ['userInfo1'] });
  const { data: status } = useQuery<RecruitType>({
    queryKey: ['applyStatus'],
    queryFn: () => getUserApplyList(data?.data.item.id),
  });
  const user = data?.data.item;

  const { mutate: applyRecruit } = useMutation({
    mutationFn: () => postApplyRecruit(shopId, recruitId),
    onSuccess: (data: { item: { id: string } }) => {
      setApplicationsId(data.item.id);
      showToast('신청 완료!');
    },
    onError: (error) => {
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
    },
  });

  const { mutate: cancelRecruit } = useMutation({
    mutationFn: () => putCancelRecruit(shopId, recruitId, applicationsId),
    onSuccess: () => {
      showToast('취소했어요');
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 403) alert('공고 지원자만 접근할 수 있습니다');
        if (error.response?.status === 404) alert('존재하지 않는 공고입니다.');
      }
    },
  });

  return { applyRecruit, cancelRecruit, user, status };
};

export default useRecruitActions;
