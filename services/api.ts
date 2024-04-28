import axios, { AxiosError } from 'axios';

import { apiClient, postRequest } from '@/libs/axios';
import {
  PostSignInBody,
  PostSignupBody,
  PutProfileBody,
  PostCreateStoreBody,
  PostRecruitsEditBody,
  RequestRecruit,
  GetNoticesParams,
} from '@/types/api';

export async function postSignUpInfo({ email, password, confirmPassword, type }: PostSignupBody) {
  const { data } = await apiClient.post('/users', { email, password, confirmPassword, type });
  return data;
}

export async function postSignIn({ email, password }: PostSignInBody) {
  const { data } = await apiClient.post('/token', { email, password });
  return data;
}

export const getNotices = async ({
  offset,
  limit,
  address,
  keyword,
  startsAtGte,
  hourlyPayGte,
  sort,
}: GetNoticesParams) => {
  const params = new URLSearchParams();

  if (sort) {
    params.append('sort', sort);
  }
  if (offset) {
    params.append('offset', offset.toString());
  }

  if (limit) {
    params.append('limit', limit.toString());
  }

  if (address.length !== 0) {
    address.forEach((v) => {
      params.append('address', v);
    });
  }

  if (keyword) {
    params.append('keyword', keyword.toString());
  }

  if (startsAtGte) {
    params.append('startsAtGte', startsAtGte.toISOString());
  }

  if (hourlyPayGte) {
    params.append('hourlyPayGte', hourlyPayGte.toString());
  }

  const { data } = await apiClient.get('/notices', { params });
  return data;
};

export const getPersonalNotices = async ({ address }: { address: string }) => {
  const { data } = await apiClient.get(`/notices?address=${address}`);
  return data;
};

type UserType = 'employee' | 'employer';

export interface ProfileItem extends ProfileOptionalItem {
  email: string;
  id: string;
  shop: null;
  type: UserType;
}

export interface ProfileOptionalItem {
  name: string;
  phone: string;
  address: string;
  bio: string;
}

interface ProfileLink {
  description: string;
  href: string;
  method: string;
  rel: string;
}

interface GetUserProfileResponse {
  item: ProfileItem;
  links: ProfileLink[];
}

export const getUserProfile = async (userId: string | string[]): Promise<GetUserProfileResponse> => {
  const { data } = await apiClient.get(`/users/${userId}`);
  return data;
};

export const getApplyList = async (userId: string | string[], page = 1, token?: string): Promise<any> => {
  const { data } = await axios.get(
    `https://bootcamp-api.codeit.kr/api/4-2/the-julge/users/${userId}/applications?limit=5&offset=${(page - 1) * 5}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data;
};

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

export const getMyStore = async (id: string) => {
  const { data } = await apiClient.get(`/shops/${id}`);
  return data;
};

export const getStoreRecruit = async (storeId: string, recruitId: string) => {
  const { data } = await apiClient.get(`/shops/${storeId}/notices/${recruitId}`);
  return data;
};

export const getRecruitApplyList = async (storeId: string, recruitId: string, offset: number) => {
  const { data } = await apiClient.get(
    `/shops/${storeId}/notices/${recruitId}/applications?limit=5&offset=${(offset - 1) * 5}`,
  );
  return data;
};

export const requestAccepteRecruit = async ({ storeId, recruitId, applicationsId }: RequestRecruit) => {
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

export const requestRejecteRecruit = async ({ storeId, recruitId, applicationsId }: RequestRecruit) => {
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

// eslint-disable-next-line consistent-return
export const getStoreInformation = async (storeId: string | string[]) => {
  try {
    const { data } = await apiClient.get(`/shops/${storeId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const requestModificationStore = async (storeId: string | string[], formData: PostCreateStoreBody) => {
  try {
    await postRequest.put(`/shops/${storeId}`, formData);
  } catch (err) {
    console.log(err);
  }
};

export const getDetailRecruit = async (shopId: string, recruitId: string) => {
  try {
    const { data } = await apiClient.get(`/shops/${shopId}/notices/${recruitId}`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data.message);
    }
    return null;
  }
};

export const postRecruitsEdit = async ({ Id, formData }: PostRecruitsEditBody) => {
  const { data } = await postRequest.post(`/shops/${Id}/notices`, formData);
  return data;
};

export const putAlertRead = async (userId: string, alertId: string) => {
  const { data } = await postRequest.put(`/users/${userId}/alerts/${alertId}`);
  return data;
};

export const getStoreNotice = async (storeId: string, offset: number, limit: number) => {
  const { data } = await apiClient.get(`/shops/${storeId}/notices?offset=${offset}&limit=${limit}`);
  return data;
};

export const postApplyRecruit = async (shopId: string, recruitId: string) => {
  const { data } = await postRequest.post(`/shops/${shopId}/notices/${recruitId}/applications`);
  return data;
};

export const putCancelRecruit = async (shopId: string, recruitId: string, applicationsId: string) => {
  const { data } = await postRequest.put(`/shops/${shopId}/notices/${recruitId}/applications/${applicationsId}`, {
    status: 'canceled',
  });
  return data;
};

export const getUserApplyList = async (userId?: string) => {
  const { data } = await postRequest.get(`/users/${userId}/applications?limit=100`);
  return data;
};
