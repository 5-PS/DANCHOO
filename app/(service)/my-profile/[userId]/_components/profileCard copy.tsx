'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import Button from '@/components/button/button';
import Table from '@/components/table/table';
import { ProfileOptionalItem, getUserProfile } from '@/services/api';

import Empty from './empty';
// import { ProfileOptionalItem } from '@/services/api';

function ProfileCard() {
  const { data }: any = useQuery({
    queryKey: ['userInfo1'],
  });
  const [userData, setUserData] = useState<ProfileOptionalItem | null>(null);
  const userId = data?.data.item.id;

  useEffect(() => {
    const getData = async () => {
      if (userId) {
        const response = await getUserProfile(userId);
        setUserData(response);
      }
    };
    getData();
  }, [userId]);
  if (!userData?.name) {
    return (
      <section className=" bg-red-10">
        <Empty
          title="내 프로필"
          desc="내 프로필을 등록하고 원하는 가게에 지원해 보세요."
          btnText="내 프로필 등록하기"
          href="/my-profile/edit"
        />
      </section>
    );
  }

  return (
    <>
      <div className="max-w-[957px] m-auto py-[60px] p-[32px]">
        <h2 className="font-bold text-[28px] mb-10">내 프로필</h2>
        <div className="bg-white shadow-modal-box p-[32px]">
          <div className="flex justify-between">
            <div className="text-[20px]">{userData.name}</div>
            <div className="w-[200px]">
              <Button background="bg-white">편집하기</Button>
            </div>
          </div>
          <div>{userData.phone}</div>
          <div>{userData.address}</div>
          <div>{userData.bio}</div>
        </div>
      </div>
      <Table />
    </>
  );
}
export default ProfileCard;
