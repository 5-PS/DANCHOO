import apiClient from '@/libs/axios';
import { GetNoticesParams, PostSignInBody, PostSignupBody } from '@/types/api';

export async function postSignUpInfo({ email, password, confirmPassword, type }: PostSignupBody) {
  const { data } = await apiClient.post('/users', { email, password, confirmPassword, type });
  return data;
}

export async function postSignIn({ email, password }: PostSignInBody) {
  const { data } = await apiClient.post('/token', { email, password });
  return data;
}

export const getNotices = async ({
  offset = 0,
  limit = 6,
  address,
  keyword,
  startsAtGte,
  hourlyPayGte,
  sort,
}: GetNoticesParams) => {
  const { data } = await apiClient.get('/notices', {
    params: {
      offset,
      limit,
      address,
      keyword,
      startsAtGte,
      hourlyPayGte,
      sort,
    },
  });
  return data;
};

export const getPersonalNotices = async () => {
  const { data } = await apiClient.get('/notices');
  return data;
};
