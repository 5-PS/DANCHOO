'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  errorMessage?: string;
  rightText?: string;
}

export default forwardRef<HTMLInputElement, InputProps>(({ label, id, errorMessage, rightText, ...restProps }, ref) => {
  const inputClassName = `px-5 py-4 bg-white border border-solid rounded-md outline-none ${errorMessage ? 'border-[#FF4040]' : 'border-gray-30'}`;

  return (
    <div className="relative flex flex-col w-full gap-2">
      <label htmlFor={id} className="text-black leading-[26px]">
        {label}
      </label>
      <input ref={ref} id={id} className={inputClassName} {...restProps} />
      {rightText && <span className="absolute right-5 top-[50px]">{rightText}</span>}
      {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  );
});
