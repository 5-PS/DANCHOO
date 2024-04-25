import axios, { AxiosError } from 'axios';

import apiClient, { postRequest } from '@/libs/axios';
import { PostSignInBody, PostSignupBody, PutProfileBody, PostCreateStoreBody } from '@/types/api';

export async function postSignUpInfo({ email, password, confirmPassword, type }: PostSignupBody) {
  const { data } = await apiClient.post('/users', { email, password, confirmPassword, type });
  return data;
}

export async function postSignIn({ email, password }: PostSignInBody) {
  const { data } = await apiClient.post('/token', { email, password });
  return data;
}

export const putUserProfile = async (userId: string | string[], formData: PutProfileBody) => {
  const { data } = await postRequest.put(`users/${userId}`, formData);
  return data;
};
// S3이미지 업로드
export const uploadImageToS3 = async (url: string, file: File) => axios.put(url, file);

// eslint-disable-next-line consistent-return
export const requestUploadImg = async (file: File) => {
  try {
    const { data } = await postRequest.post('/images', {
      name: file.name,
    });
    const slicePresignedURL: string = data.item.url.slice(0, data.item.url.indexOf('?'));
    await uploadImageToS3(data.item.url, file);
    return slicePresignedURL;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage = error.response?.data.message;
      throw new Error(errorMessage);
    }
  }
};

export const postCreateStore = async (formData: PostCreateStoreBody) => {
  const { data } = await postRequest.post('/shops', formData);
  return data;
};

// TODO: 4-2api로 변경
export const TEST_URL = 'https://bootcamp-api.codeit.kr/api/0-1/the-julge';
export const getStoreRecruit = async (storeId: string, recruitId: string) => {
  const { data } = await axios.get(`${TEST_URL}/shops/${storeId}/notices/${recruitId}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const getRecruitApplyList = async (storeId: string, recruitId: string, offset: number) => {
  const { data } = await axios.get(
    `${TEST_URL}/shops/${storeId}/notices/${recruitId}/applications?limit=5&offset=${(offset - 1) * 5}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return data;
};

export const requestAccepteRecruit = async ({ storeId, recruitId, applicationsId }) => {
  try {
    await postRequest.put(`/shops/${storeId}/notices/${recruitId}/applications/${applicationsId}`, {
      status: 'accepted',
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      alert(err.response?.data.message);
    }
  }
};

export const requestRejecteRecruit = async ({ storeId, recruitId, applicationsId }) => {
  try {
    await postRequest.put(`/shops/${storeId}/notices/${recruitId}/applications/${applicationsId}`, {
      status: 'rejected',
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      alert(err.response?.data.message);
    }
  }
};
