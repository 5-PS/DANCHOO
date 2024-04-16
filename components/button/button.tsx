'use client';

import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  background: string;
  fontSize: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
/**
 * 가로값이 100%이므로 container로 감싸서 크기 조절을 해주세요, height는 48px고정
 * @param background tailwind 코드로입력 택1(bg-primary, bg-white, bg-gray-40)
 * @param fontSize 16,14,12 중 입력
 * @param onClick 핸들러 함수
 */

// TODO: 폰트설정
function Button({ children, ...rest }: ButtonProps) {
  const buttonClasses = `${rest.background}
  ${rest.background === 'bg-white' ? 'border-primary border hover:bg-gray-10 text-primary' : ''} 
  ${rest.background === 'bg-gray-40' ? 'hover:bg-gray-50 text-white ' : ''} 
  ${rest.background === 'bg-primary' ? 'hover:bg-primary-hover text-white ' : ''}
  ${rest.fontSize === 16 ? 'text-base font-bold leading-5' : ''} 
  ${rest.fontSize === 14 ? 'text-sm font-bold' : ''} 
  ${rest.fontSize === 12 ? 'text-xs font-normal leading-4' : ''} 
  active:scale-95 w-full h-[48px] shadow text-[16px] rounded-md font-sans`;

  return (
    <button className={buttonClasses} onClick={rest.onClick}>
      {children}
    </button>
  );
}

export default Button;
