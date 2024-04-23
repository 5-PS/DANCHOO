'use client';

import { ReactNode, useState } from 'react';

interface SelectInputProps {
  children: ReactNode;
  onChange: (value: string) => void;
  renderList: { id: number; category: string }[];
  errorMessage?: string;
}

export default function SelectInput({ children, onChange, renderList, errorMessage }: SelectInputProps) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [selectOption, setSelectOption] = useState('');

  const listClassName =
    'py-3 text-center leading-[22px] border border-solid border-gray-20 cursor-pointer hover:bg-red-10';

  const handleClickDropdown = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const handleSelectOption = (category: string) => {
    setSelectOption(category);
    onChange(category);
    setIsDropdownOpened(false);
  };

  return (
    <div className="relative flex flex-col w-full gap-2">
      <p className="leading-[26px]">{children}</p>
      <button
        type="button"
        onClick={handleClickDropdown}
        className={`w-full px-5 py-4 text-left bg-white border border-solid rounded-md border-gray-30 ${isDropdownOpened ? 'bg-dropdown-top' : 'bg-dropdown-down'} ${errorMessage && 'border-red-500'} bg-no-repeat bg-right bg-origin-content`}
      >
        {selectOption || '선택'}
      </button>
      {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
      <ul
        className={`scrollbar z-50 absolute w-full top-[100px] overflow-y-auto h-[190px] rounded-md border border-solid border-gray-20 bg-white ${isDropdownOpened ? 'block' : 'hidden'}`}
      >
        {renderList.map(({ id, category }) => (
          <li key={id} onClick={() => handleSelectOption(category)} className={listClassName}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
