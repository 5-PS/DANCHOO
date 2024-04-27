import Button from '@/components/button/button';
import { getUserProfile } from '@/services/api';

import ApplyList from './applyList';
import Empty from './empty';

async function ProfileContainer({ userId, page }: { userId: string | string[]; page: string }) {
  const user = await getUserProfile(userId);
  const { item } = user;
  if (!item.name) {
    return (
      <section className=" bg-red-10">
        <Empty
          title="내 프로필"
          desc="내 프로필을 등록하고 원하는 가게에 지원해 보세요."
          btnText="내 프로필 등록하기"
          href={`/my-profile/${userId}/edit`}
        />
      </section>
    );
  }
  return (
    <>
      <section>
        <div className="max-w-[957px] m-auto py-[60px] p-[32px]">
          <h2 className="font-bold text-[28px] mb-10">내 프로필</h2>
          <div className="bg-white  shadow-modal-box p-[32px]">
            <div className="flex justify-between">
              <div className="text-[20px]">{item.name}</div>
              <div className="w-[200px]">
                <Button background="bg-white">편집하기</Button>
              </div>
            </div>
            <div>{item.phone}</div>
            <div>{item.address}</div>
            <div>{item.bio}</div>
          </div>
        </div>
      </section>
      <section className=" bg-red-10">
        <ApplyList userId={userId} page={page} />
      </section>
    </>
  );
}
export default ProfileContainer;
