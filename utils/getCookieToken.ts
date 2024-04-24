import { cookies } from 'next/headers';

const getCookieToken = () => {
  const cookieStore = cookies();
  const token = cookieStore.get('accessToken');

  if (token) return token.value;

  return null;
};

export default getCookieToken;
