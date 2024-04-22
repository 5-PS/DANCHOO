'use client';

import Image from 'next/image';

import checkedIcon from '@/public/icons/checked.svg';
import uncheckedIcon from '@/public/icons/unchecked.svg';

const MEMBER_TYPE = [
  { label: '알바님', type: 'employee' },
  { label: '사장님', type: 'employer' },
];

interface MemberTypeProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MemberType({ value, onChange }: MemberTypeProps) {
  const getButtonClassName = (buttonValue: string) => {
    const baseButtonClassName =
      'py-[13px] w-[167px] text-[14px] leading=[22px] rounded-[30px] border border-solid bg-white flex gap-[9px] justify-center items-center';

    const selectedButtonClassName = value === buttonValue ? 'border-primary' : 'border-gray-30';

    return `${baseButtonClassName} ${selectedButtonClassName}`;
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-black leading-[26px]">회원 유형</p>
      <div className="flex gap-4">
        {MEMBER_TYPE.map(({ label, type }) => (
          <button key={type} type="button" onClick={() => onChange(type)} className={getButtonClassName(label)}>
            <Image src={value === type ? checkedIcon : uncheckedIcon} alt="check icon" width={20} height={20} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
