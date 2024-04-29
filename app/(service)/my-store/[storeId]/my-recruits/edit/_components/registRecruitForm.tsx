'use client';

import { useForm } from 'react-hook-form';

import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { postRecruitsEdit } from '@/services/api';
import useModal from '@/hooks/useModal';

interface FieldValues {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

export default function RegistRecruitForm() {
  const { storeId } = useParams();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' });
  const {openModal} = useModal();

  const inputFields = [
    {
      label: '시급*',
      type: 'number',
      rightText: '원',
      errorMessage: errors.hourlyPay?.message,
      placeholder: '입력',
      register: register('hourlyPay', { required: '시급을 입력해주세요' }),
    },
    {
      label: '시작 일시*',
      type: 'date',
      errorMessage: errors.startsAt?.message,
      register: register('startsAt', { required: '시작 일시를 입력해주세요' }),
    },
    {
      label: '업무 시간*',
      type: 'number',
      errorMessage: errors.workhour?.message,
      placeholder: '입력',
      rightText: '시간',
      register: register('workhour', { required: '업무 시간을 입력해주세요' }),
    },
  ];

  const postRecruits = async (Id: string | string[], data: any) => {
    const formData = {
      ...data,
      startsAt: `${data.startsAt}T15:00:00Z`,
      hourlyPay: Number(data.hourlyPay),
      workhour: Number(data.workhour),
    };
    try {
      await postRecruitsEdit({ Id, formData });
      openModal({type:'notice', content:'등록이 완료되었습니다.', submitFunction:()=>{router.push(`/my-store/${storeId}`);}})
    } catch (error) {
      if (error instanceof AxiosError) {

        alert(error.response?.data.message);
      }
    }
  };

  const onSubmit = async (data: FieldValues) => {
    await postRecruits(storeId, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 mb-6 md:gap-8">
        <div className="grid gap-x-5 md:grid-cols-2 xl:grid-cols-3 gap-y-6">
          {inputFields.map((field) => (
            <Input
              key={field.label}
              label={field.label}
              type={field.type}
              rightText={field.rightText}
              errorMessage={field.errorMessage}
              placeholder={field.placeholder}
              {...field.register}
            />
          ))}
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
