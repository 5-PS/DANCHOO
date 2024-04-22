'use client';

import { Controller, useForm } from 'react-hook-form';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import { postSignUpInfo } from '@/services/api';

import MemberType from './memberType';

interface FieldValues {
  email: string;
  password: string;
  password_repeat: string;
  type: string;
}

const EMAIL_REGEX = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[a-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const PASSWORD_REGEX = /^.{8,}$/;

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    watch,
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
          value: EMAIL_REGEX,
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
          value: PASSWORD_REGEX,
          message: '비밀번호를 8자 이상 입력해주세요.',
        },
      },
    },
    {
      name: 'password_repeat',
      label: '비밀번호 확인',
      type: 'password',
      placeholder: '비밀번호를 한 번 더 입력해주세요.',
      validation: {
        validate: (value: string) => value === watch('password') || '비밀번호가 일치하지 않습니다.',
      },
    },
  ];

  const onSubmit = async (data: FieldValues) => {
    try {
      await postSignUpInfo(data);
      router.push('/signin');
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      const axiosError = error as AxiosError;
      switch (axiosError.message) {
        case '400':
          alert('잘못된 요청입니다. 입력 내용을 확인해주세요.');
          break;
        case '409':
          alert('이미 사용 중인 이메일입니다.');
          break;
        default:
          alert('회원 가입 요청에 실패하였습니다.');
          break;
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
