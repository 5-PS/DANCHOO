import { useEffect, useState } from 'react';

const useToast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShouldRender, setIsShouldRender] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [message, setMessage] = useState('');

  const startHidingToast = () => {
    setIsShown(false);

    setTimeout(() => {
      setIsShouldRender(false);
      setIsLoading(false);
    }, 1000);
  };

  const showToast = (msg: string) => {
    if (isLoading) return;

    setIsLoading(true);
    setIsShouldRender(true);
    setIsShown(true);
    setMessage(msg);

    setTimeout(() => {
      startHidingToast();
    }, 3000);
  };

  useEffect(() => {
    if (!isShown && !isLoading) {
      const timer = setTimeout(() => {
        setIsShouldRender(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isShown, isLoading]);

  return {
    isLoading,
    isShouldRender,
    isShown,
    message,
    showToast,
    startHidingToast,
  };
};

export default useToast;
