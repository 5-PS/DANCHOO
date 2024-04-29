'use client';

import { Controller, useForm } from 'react-hook-form';

import { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';

import Button from '@/components/button/button';
import Input from '@/components/input/input';
import SelectInput from '@/components/input/selectInput';
import { getUserProfile, putUserProfile } from '@/services/api';
import { PutProfileBody } from '@/types/api';

const ADDRESS_LIST = [
  { id: 1, category: '서울시 종로구' },
  { id: 2, category: '서울시 중구' },
  { id: 3, category: '서울시 용산구' },
  { id: 4, category: '서울시 성동구' },
  { id: 5, category: '서울시 광진구' },
  { id: 6, category: '서울시 동대문구' },
  { id: 7, category: '서울시 중랑구' },
  { id: 8, category: '서울시 성북구' },
  { id: 9, category: '서울시 강북구' },
  { id: 10, category: '서울시 도봉구' },
  { id: 11, category: '서울시 노원구' },
  { id: 12, category: '서울시 은평구' },
  { id: 13, category: '서울시 서대문구' },
  { id: 14, category: '서울시 마포구' },
  { id: 15, category: '서울시 양천구' },
  { id: 16, category: '서울시 강서구' },
  { id: 17, category: '서울시 구로구' },
  { id: 18, category: '서울시 금천구' },
  { id: 19, category: '서울시 영등포구' },
  { id: 20, category: '서울시 동작구' },
  { id: 21, category: '서울시 관악구' },
  { id: 22, category: '서울시 서초구' },
  { id: 23, category: '서울시 강남구' },
  { id: 24, category: '서울시 송파구' },
  { id: 25, category: '서울시 강동구' },
];
interface FieldValues extends PutProfileBody {}
export default function ProfileEditForm() {
  const params = useParams();
  const { userId } = params;
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ 
    mode: 'all' ,
    defaultValues: async() => {
      const user = await getUserProfile(userId);
      const { item } = user;
      return {
        name: item.name,
        phone: item.phone,
        address:item.address,
        bio: item.bio,
      }}
  });
  const handleOnSubmit = async (data: PutProfileBody) => {
    try {
      await putUserProfile(userId, data);
      alert('프로필을 등록하였습니다');
      router.push(`/my-profile/${userId}`);
    } catch (err) {
      if (err instanceof AxiosError) {
        const errorMessage = err.response?.data.message;
        alert(errorMessage);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
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
                message: '연락처 형식으로 적어주세요. ex)010********',
              },
            })}
          />
          <Controller
            name="address"
            control={control}
            render={({ field: { onChange } }) => (
              <SelectInput onChange={onChange} renderList={ADDRESS_LIST}>
                선호 지역
              </SelectInput>
            )}
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
          <Button background="bg-primary" className="h-[48px]">
            등록하기
          </Button>
        </div>
      </div>
    </form>
  );
}
