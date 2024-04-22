'use client';

import { useState } from 'react';

const FILTER_LIST = [
  {
    id: 1,
    category: '마감임박순',
  },
  {
    id: 2,
    category: '시급많은순',
  },
  {
    id: 3,
    category: '시간적은순',
  },
  {
    id: 4,
    category: '가다나순',
  },
];

export default function SortingDropdown() {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [selectOption, setSelectOption] = useState('마감임박순');

  const listClassName =
    'py-2 text-center leading-[22px] border border-solid border-gray-20 cursor-pointer hover:bg-gray-10';

  const handleClickDropdown = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };

  const handleSelectOption = (category: string) => {
    setSelectOption(category);
    setIsDropdownOpened(false);
  };

  return (
    <div className="relative flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClickDropdown}
        className={`w-full p-3 text-black font-bold text-left bg-gray-10 border border-solid rounded-md border-gray-30 ${isDropdownOpened ? 'bg-dropdown-top' : 'bg-dropdown-down'} bg-no-repeat bg-right bg-origin-content`}
      >
        {selectOption || '선택'}
      </button>
      <ul
        className={`absolute text-[14px] w-full top-[120%] rounded-md border border-solid border-gray-20 bg-white ${isDropdownOpened ? 'block' : 'hidden'}`}
      >
        {FILTER_LIST.map(({ id, category }) => (
          <li key={id} onClick={() => handleSelectOption(category)} className={listClassName}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
