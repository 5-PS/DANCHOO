import { AxiosError } from 'axios';

import apiClient from '@/libs/axios';

export async function postSignUpInfo(body: object) {
  try {
    const response = await apiClient.post('/users', body);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new Error(axiosError.response.status);
    } else {
      throw new Error('회원 가입 요청에 실패하였습니다.');
    }
  }
}
