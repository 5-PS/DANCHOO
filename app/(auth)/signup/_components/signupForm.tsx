'use client';

import { Controller, useForm } from 'react-hook-form';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import ROUTE_PATHS from '@/constants/route';
import { postSignUpInfo } from '@/services/api';

import MemberType from './memberType';

interface FieldValues {
  email: string;
  password: string;
  confirmPassword: string;
  type: 'employee' | 'employer';
}

const REGEX = {
  EMAIL: /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[a-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
  PASSWORD: /^.{8,}$/,
};

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all', defaultValues: { type: 'employee' } });

  const FORM_FIELDS = [
    {
      name: 'email',
      label: '이메일',
      type: 'text',
      placeholder: '이메일을 입력해주세요.',
      validation: {
        required: '이메일을 입력해주세요.',
        pattern: {
          value: REGEX.EMAIL,
          message: '올바른 이메일 주소가 아닙니다.',
        },
      },
    },
    {
      name: 'password',
      label: '비밀번호',
      type: 'password',
      placeholder: '비밀번호를 입력해주세요.',
      validation: {
        required: '비밀번호를 입력해주세요.',
        pattern: {
          value: REGEX.PASSWORD,
          message: '비밀번호를 8자 이상 입력해주세요.',
        },
      },
    },
    {
      name: 'confirmPassword',
      label: '비밀번호 확인',
      type: 'password',
      placeholder: '비밀번호를 한 번 더 입력해주세요.',
      validation: {
        validate: (value: string) => value === getValues('password') || '비밀번호가 일치하지 않습니다.',
      },
    },
  ];

  const onSubmit = async (data: FieldValues) => {
    try {
      await postSignUpInfo(data);

      alert('회원가입이 완료되었습니다.');

      router.push(ROUTE_PATHS.SIGN_IN);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.status === 409 ? error.response.data.message : '회원 가입 요청에 실패하였습니다.';
        alert(errorMessage);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[350px] gap-7">
      {FORM_FIELDS.map(({ name, label, type, placeholder, validation }) => (
        <Input
          key={name}
          label={label}
          type={type}
          errorMessage={errors[name as keyof FieldValues]?.message as string}
          placeholder={placeholder}
          {...register(name as keyof FieldValues, validation)}
        />
      ))}
      <Controller
        name="type"
        control={control}
        render={({ field: { onChange, value } }) => <MemberType value={value} onChange={onChange} />}
      />
      <Button background="bg-primary" fontSize={16} height={48}>
        가입하기
      </Button>
    </form>
  );
}
