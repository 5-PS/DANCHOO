'use client';

import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  background: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
/**
 * 가로값이 100%이므로 container로 감싸서 크기 조절을 해주세요, height는 48px고정
 * @param background tailwind 코드로입력 택1(bg-primary, bg-white, bg-gray-40)
 * @param color tailwind 코드로입력 택1(bg-primary, bg-white, bg-gray-40)
 * @param onClick 핸들러 함수
 */

// TODO: 폰트설정
function Button({ children, ...rest }: ButtonProps) {
  const buttonClasses = `${rest.background} ${rest.color} 
  ${rest.background === 'bg-white' ? 'border-primary border hover:bg-gray-10' : ''} 
  ${rest.background === 'bg-gray-40' ? 'hover:bg-gray-50' : ''} 
  ${rest.background === 'bg-primary' ? 'hover:bg-primary-hover' : ''}
  font-bold active:scale-95 w-full h-[48px] shadow text-[16px] rounded-md font-sans`;

  return (
    <button className={buttonClasses} onClick={rest.onClick}>
      {children}
    </button>
  );
}

export default Button;
