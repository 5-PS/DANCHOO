'use client';

import { useEffect, RefObject } from 'react';

/**
 * 원리: 만약 현재 참조하고 있는 DOM 요소가 존재하고, 그 요소가 이벤트의 대상을 포함하고 있지 않다면, 콜백 함수를 실행
 * 특정 요소 외부를 클릭했을 때 어떤 동작을 수행하기 위해 사용
 * @param ref 참조할 돔 요소(모달에 설정)
 * @param callback 모달을 닫힘 상태로 만들어 줄 수있는 set함수
 */
const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (() => void) | undefined,
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
