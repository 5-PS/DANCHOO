'use client';

import useOutsideClick from '@/hooks/useOutSideClick';
import { MouseEvent, useRef, useState } from 'react';

const FILTER_LIST: { id: number; category: string; sort: 'time' | 'pay' | 'hour' | 'shop' }[] = [
  {
    id: 1,
    category: '마감임박순',
    sort: 'time',
  },
  {
    id: 2,
    category: '시급많은순',
    sort: 'pay',
  },
  {
    id: 3,
    category: '시간적은순',
    sort: 'hour',
  },
  {
    id: 4,
    category: '가나다순',
    sort: 'shop',
  },
];

export default function SortingDropdown({
  onSelect,
  sortOption,
}: {
  onSelect: (option: 'time' | 'pay' | 'hour' | 'shop') => void;
  sortOption: 'time' | 'pay' | 'hour' | 'shop';
}) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [selectOption, setSelectOption] = useState(FILTER_LIST.find((a) => a.sort === sortOption)?.category);
  const listClassName =
  'py-2 text-center leading-[22px] border border-solid border-gray-20 cursor-pointer hover:bg-gray-10';
  
  const handleClickDropdown = () => {
    setIsDropdownOpened(!isDropdownOpened);
  };
  
  const toggleRef = useRef(null)
  const ref = useRef(null)
  useOutsideClick(ref, () => {setIsDropdownOpened(false)}, toggleRef);

  const handleSelectOption = (category: string, sort: 'time' | 'pay' | 'hour' | 'shop') => {
    setSelectOption(category);
    setIsDropdownOpened(false);
    onSelect(sort);
  };

  return (
    <div className="relative z-50 flex flex-col gap-2">
      <button
        ref={toggleRef}
        type="button"
        onClick={handleClickDropdown}
        className={`w-[110px] h-[30px] text-[14px] flex items-center p-3 text-black font-bold text-left bg-gray-10 rounded-md ${isDropdownOpened ? 'bg-dropdown-top' : 'bg-dropdown-down'} bg-size-10 bg-no-repeat bg-right bg-origin-content`}
      >
        {selectOption || '선택'}
      </button>
      <ul ref={ref} className={`absolute text-[14px] w-full top-[120%] bg-white ${isDropdownOpened ? 'block' : 'hidden'} `}>
        {FILTER_LIST.map(({ id, category, sort }) => (
          <li key={id} className={listClassName}>
            <button onClick={() => handleSelectOption(category, sort)} className="w-full">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
