import apiClient from '@/libs/axios';
import { PostSignInBody, PostSignupBody } from '@/types/api';

export async function postSignUpInfo({ email, password, confirmPassword }: PostSignupBody) {
  const response = await apiClient.post('/users', { email, password, confirmPassword });
  return response.data;
}

export async function postSignIn({ email, password }: PostSignInBody) {
  const response = await apiClient.post('/token', { email, password });
  return response.data;
}
