'use client';

import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  type: string | undefined;
  errorMessage: string | undefined;
  placeholder: string;
}

export default forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, errorMessage, placeholder, ...restProps }, ref) => {
    const inputClassName = `px-5 py-4 bg-white border border-solid rounded-md outline-none ${errorMessage ? 'border-[#FF4040]' : 'border-gray-30'}`;

    return (
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="id" className="text-black leading-[26px]">
          {label}
        </label>
        <input ref={ref} id="id" type={type} placeholder={placeholder} className={inputClassName} {...restProps} />
        {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
      </div>
    );
  },
);
