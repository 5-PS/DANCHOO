'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/button/button';
import Input from '@/components/input/input';

interface FieldValues {
  hourlyPay: string;
  registTime: string;
  workTime: string;
  description: string;
}

function formatHourlyPay(input: string) {
  const onlyNums = input.replace(/[^0-9]/g, '');
  return onlyNums.length < 4 ? onlyNums : onlyNums.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export default function RegistRecruitForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' });

  const hourlyPay = watch('hourlyPay', '');

  const [displayHourlyPay, setDisplayHourlyPay] = useState('');

  useEffect(() => {
    setDisplayHourlyPay(formatHourlyPay(hourlyPay));
  }, [hourlyPay]);

  /**
   * @todo 공고등록 로직 추가
   */
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <div className="flex flex-col gap-6 mb-6 md:gap-8">
        <div className="grid gap-x-5 md:grid-cols-2 xl:grid-cols-3 gap-y-6">
          <Input
            label="시급*"
            type="text"
            rightText="원"
            errorMessage={errors.hourlyPay?.message}
            placeholder="입력"
            value={displayHourlyPay}
            {...register('hourlyPay', { required: '시급을 입력해주세요' })}
          />
          <Input
            label="시작 일시*"
            type="date"
            errorMessage={errors.registTime?.message}
            {...register('registTime', {
              required: '시작 일시를 입력해주세요',
            })}
          />
          <Input
            label="업무 시간*"
            type="text"
            errorMessage={errors.workTime?.message}
            placeholder="입력"
            rightText="시간"
            {...register('workTime', {
              required: '업무 시간을 입력해주세요',
            })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">
            공고 설명
            <textarea
              id="description"
              className="w-full px-5 py-4 border rounded-[5px] border-gray-30 h-[153px]"
              placeholder="설명을 입력해주세요"
              {...register('description')}
            />
          </label>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full md:w-[312px]">
          <Button background="bg-primary" className="h-12 font-bold">
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
