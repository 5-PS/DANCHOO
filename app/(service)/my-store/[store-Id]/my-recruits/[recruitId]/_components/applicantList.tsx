import Table from '@/components/table/table';
import { getRecruitApplyList } from '@/services/api';

interface ApplicantListProps {
  searchParams: { page: string };
  storeId: string;
  recruitId: string;
}
export default async function ApplicantList({ searchParams, storeId, recruitId }: ApplicantListProps) {
  const offset = searchParams.page ? Number(searchParams.page) : 1;
  const response = await getRecruitApplyList(storeId, recruitId, offset);
  if (response.count === 0) {
    return (
      <div className="flex items-center justify-center w-full min-h-[200px] border rounded-2xl border-gray-30 text-[24px] text-gray-30 md:min-h-[450px] md:text-[32px]">
        아직 신청자가 없어요!
      </div>
    );
  }
  const { items } = response;

  const data = items.map((data) => ({
    status: data.item.status,
    col1: data.item.user.item.name,
    col2: data.item.user.item.bio,
    col3: data.item.user.item.phone,
  }));

  return <Table query={searchParams} type="applicantList" data={data} totalDataCount={response.count} />;
}
