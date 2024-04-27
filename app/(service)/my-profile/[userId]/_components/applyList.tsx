import { getApplyList } from '@/services/api';

import Empty from './empty';

async function ApplyList({ userId, page }: { userId: string | string[] }) {
  const applyList = await getApplyList(userId, page);
  console.log(applyList);
  // 서버 컴포넌트라서 getCookie함수 document.cookie가 안되서 그런거 같아요
  if (applyList) {
    return (
      <Empty
        title="신청 내역"
        desc="아직 신청 내역이 없어요."
        btnText="공고 보러가기"
        href={`/my-profile/${userId}/edit`}
      />
    );
  }
}
export default ApplyList;
