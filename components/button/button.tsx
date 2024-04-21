'use client';

import React, { ReactNode } from 'react';

/**
 * @todo 폰트설정
 */
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background: string;
  fontSize: number;
  height: number;
}
/**
 * 가로값이 100%이므로 container로 감싸서 크기 조절을 해주세요
 * 버튼 disabled 상태가 되게 하려면 background 색상만 br-gray-40으로 바꿔주시면 됩니다.
 * @param children 버튼에 줄 값입니다.
 * @param background tailwind 코드로입력 택1(bg-primary, bg-white, bg-gray-40)
 * @param fontSize 16,14,12 중 입력
 * @param height 48,37,32 중 입력
 * @param onClick 핸들러 함수
 */
function Button({ children, background, fontSize, height, ...restProps }: ButtonProps) {
  const buttonClasses = `${background}
  ${background === 'bg-white' ? 'border-primary border hover:bg-gray-10 text-primary active:scale-95' : ''} 
  ${background === 'bg-gray-40' ? 'text-white ' : ''} 
  ${background === 'bg-primary' ? 'hover:bg-primary-hover text-white active:scale-95 ' : ''}
  ${fontSize === 16 ? 'text-base font-bold leading-5' : ''} 
  ${fontSize === 14 ? 'text-sm font-bold' : ''} 
  ${fontSize === 12 ? 'text-xs font-normal leading-4' : ''} 
  ${height === 48 ? 'h-[48px]' : ''}
  ${height === 37 ? 'h-[37px]' : ''}
  ${height === 32 ? 'h-[32px]' : ''}
  w-full  shadow text-[16px] rounded-md font-sans`;

  function isGray() {
    if (background === 'bg-gray-40') {
      return true;
    }
    return false;
  }

  return (
    <button className={buttonClasses} disabled={isGray()} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
