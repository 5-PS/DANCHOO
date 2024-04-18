'use client';

import { useState } from 'react';

const dummyList = [
  {
    id: 1,
    category: '김밥',
  },
  {
    id: 2,
    category: '초밥',
  },
  {
    id: 3,
    category: '돈까스',
  },
  {
    id: 4,
    category: '제육',
  },
  {
    id: 5,
    category: '라면',
  },
  {
    id: 6,
    category: '곱창',
  },
];

export default function SelectInput() {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [selectOption, setSelectOption] = useState('');

  const listClassName =
    'py-3 text-center leading-[22px] border border-solid border-gray-20 cursor-pointer hover:bg-red-10';

  const handleClickDropdown = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const handleSelectOption = (category: string) => {
    setSelectOption(category);
    setIsDropdownOpened(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="leading-[26px]">분류</p>
      <button
        type="button"
        onClick={handleClickDropdown}
        className={`w-full px-5 py-4 text-left bg-white border border-solid rounded-md border-gray-30 ${isDropdownOpened ? 'bg-dropdown-top' : 'bg-dropdown-down'} bg-no-repeat bg-right bg-origin-content`}
      >
        {selectOption || '선택'}
      </button>
      <ul
        className={`scrollbar overflow-y-auto h-[190px] rounded-md border border-solid border-gray-20 bg-white ${isDropdownOpened ? 'block' : 'hidden'}`}
      >
        {dummyList.map((option) => (
          <li key={option.id} onClick={() => handleSelectOption(option.category)} className={listClassName}>
            {option.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
