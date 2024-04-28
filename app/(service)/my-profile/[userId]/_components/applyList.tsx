import { cookies } from 'next/headers';

import Table from '@/components/table/table';
import { getApplyList } from '@/services/api';
import formatDateRange from '@/utils/formatDateRange';

import Empty from './empty';

async function ApplyList({ userId, page }: { userId: string | string[]; page: string }) {
  const pageNum = Number(page);
  const cookieStore = cookies();
  const accessToken = cookieStore.get('accessToken');
  const response = await getApplyList(userId, pageNum, accessToken?.value);
  const pageObj = {
    page,
  };
  if (!response.count) {
    return <Empty title="신청 내역" desc="아직 신청 내역이 없어요." btnText="공고 보러가기" href="/" />;
  }

  const data = response.items.map(({ item }: { item: any }) => ({
    status: item.status,
    col1: item.shop.item.name,
    col2: formatDateRange(item.notice.item.startsAt, item.notice.item.workhour),
    col3: `${item.notice.item.hourlyPay.toLocaleString()}원`,
  }));

  return <Table query={pageObj} type="applyList" totalDataCount={response.count} data={data} />;
}
export default ApplyList;
