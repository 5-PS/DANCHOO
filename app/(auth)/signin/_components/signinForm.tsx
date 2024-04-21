'use client';

import { FieldValues, useForm } from 'react-hook-form';

import Input from '@/components/input/input';

const EMAIL_REGEX = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[a-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({ mode: 'all' });

  const onSubmit = () => {
    // TODO: submit 함수 작성
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-[300px] gap-7">
        <Input
          label="이메일"
          id="email"
          type="text"
          errorMessage={errors.email?.message}
          placeholder="이메일을 입력해주세요."
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: EMAIL_REGEX,
              message: '올바른 이메일 주소가 아닙니다.',
            },
          })}
        />
        <Input
          label="비밀번호"
          id="password"
          type="password"
          errorMessage={errors.password?.message}
          placeholder="비밀번호를 입력해주세요."
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
          })}
        />
      </div>
      {/* TODO: button 컴포넌트 추가 */}
    </form>
  );
}
