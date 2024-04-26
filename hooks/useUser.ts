import { useEffect, useState } from 'react';

import { getUserProfile } from '@/services/api';
import { decodeJWT } from '@/utils/decodeJWT';

const useUser = () => {
  const [user, setUser] = useState('');

  const token = document.cookie;
  const tokenValue = token.split('=')[1];

  const decodedPayload = decodeJWT(tokenValue);

  const getUser = async () => {
    const { item } = await getUserProfile(decodedPayload.userId);
    setUser(item);
  };

  useEffect(() => {
    getUser();
  }, []);

  return user;
};

export default useUser;
