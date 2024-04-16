'use client';

import { FieldValues, useForm } from 'react-hook-form';

export default function SigninForm() {
  const { handleSubmit } = useForm<FieldValues>({ mode: 'all' });

  const onSubmit = () => {
    // TODO: submit 함수 작성
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-[300px] gap-7">{/* TODO: input 컴포넌트 추가 */}</div>
      {/* TODO: button 컴포넌트 추가 */}
    </form>
  );
}
