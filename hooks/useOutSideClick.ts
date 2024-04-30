'use client';

import { useEffect, RefObject } from 'react';

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  toggleRef?: RefObject<T>,
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (toggleRef?.current && toggleRef.current.contains(event.target as Node)) {
        return;
      }
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
