import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { ProfileItem, getUserProfile } from '@/services/api';
import { decodeJWT } from '@/utils/decodeJWT';

const useUser = () => {
  const [user, setUser] = useState<ProfileItem | null>(null);

  const token = typeof document !== 'undefined' ? document.cookie : '';
  // console.log(token);
  // const tokenValue = token.split('=')[1];
  const accessToken = token?.split('accessToken=')[1];

  const decodedPayload = decodeJWT(accessToken);

  const { data } = useQuery({
    queryKey: ['key', decodedPayload.userId],
    queryFn: () => getUserProfile(decodedPayload.userId),
    enabled: !!decodedPayload.userId,
  });

  useEffect(() => {
    const getUser = async () => {
      const { item } = await getUserProfile(decodedPayload.userId);
      setUser(item);
    };

    getUser();
  }, [decodedPayload.userId]);

  return user;
};

export default useUser;
