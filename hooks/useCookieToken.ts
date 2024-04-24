import { useEffect, useState } from 'react';

const useCookieToken = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasAccessToken = document.cookie.startsWith('accessToken');
    setIsLoggedIn(hasAccessToken);
  }, []);

  return isLoggedIn;
};

export default useCookieToken;
