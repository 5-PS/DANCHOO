'use client';

import { Controller, FieldValues, useForm } from 'react-hook-form';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import SelectInput from '@/components/input/selectInput';

export default function ProfileEditForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="flex flex-col gap-6 mb-6 md:gap-8">
        <div className="grid gap-x-5 md:grid-cols-2 xl:grid-cols-3 gap-y-6">
          <Input
            label="이름*"
            type="text"
            errorMessage={errors.name?.message}
            placeholder="이름을 입력해주세요"
            {...register('name', { required: '이름을 입력해주세요' })}
          />
          <Input
            label="연락처*"
            type="text"
            errorMessage={errors.phone?.message}
            placeholder="연락처를 입력해주세요."
            {...register('phone', {
              required: '연락처를 입력해주세요',
              pattern: {
                value: /^(01[0-9])[0-9]{4}[0-9]{4}$/,
                message: '연락처 형식을 적어주세요',
              },
            })}
          />
          <Controller
            name="address"
            control={control}
            render={({ field: { onChange } }) => <SelectInput onChange={onChange}>선호 지역</SelectInput>}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="introduction">소개</label>
          <textarea
            className="w-full px-5 py-4 border rounded-[5px] border-gray-30 h-[153px]"
            placeholder="소개를 입력해주세요"
            id="introduction"
            {...register('bio')}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full md:w-[312px]">
          <Button background="bg-primary" fontSize={16} height={48}>
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
