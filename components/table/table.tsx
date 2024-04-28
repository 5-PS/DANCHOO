import Pagination from '../pagination/pagination';
import ApplicationTableStateBadge from '../tableStateBadge/applicationTableStateBadge';
import ApplyTableStateBadge from '../tableStateBadge/applyTableStateBadge';

interface TableProps {
  query: { page: string };
  type: 'applicantList' | 'applyList';
  data: {
    status: 'pending' | 'accepted' | 'rejected';
    col1: string;
    col2: string;
    col3: string;
    applicationsId?: string;
  }[];
  totalDataCount: number;
}
function Table({ query, type, data, totalDataCount }: TableProps) {
  return (
    <div className="relative w-full max-w-[964px] overflow-hidden border border-gray-20 rounded-[10px] bg-white m-auto">
      <div className="overflow-x-auto ">
        <table className="w-[801px] border-spacing-0 border-collapse md:w-[962px]">
          <thead>
            <tr className="h-[40px] text-[12px] border-b text-left border-gray-20 bg-red-10 md:text-[14px] md:h-[50px]">
              <th className="tb-head w-[186px] sticky left-0  md:w-[226px] bg-red-10">
                {type === 'applicantList' && '신청자'}
                {type === 'applyList' && '가게'}
              </th>
              <th className="tb-head w-[270px] md:w-[300px]">
                {type === 'applicantList' && '소개'}
                {type === 'applyList' && '일자'}
              </th>
              <th className="tb-head w-[180px]  md:w-[200px]">
                {type === 'applicantList' && '전화번호'}
                {type === 'applyList' && '시급'}
              </th>
              <th className="tb-head sticky right-0 bg-red-10 w-[165px] md:w-[236px]">상태</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              <tr className="text-[14px]  md:text-[16px] border-b border-gray-20 h-[52px]">
                <td className="sticky left-0 bg-white tb-data ">{data.col1}</td>
                <td className="tb-data ">{data.col2}</td>
                <td className="tb-data ">{data.col3}</td>
                <td className="sticky right-0 bg-white tb-data" aria-label="badge">
                  {type === 'applicantList' ? (
                    <ApplicationTableStateBadge state={data.status} applicationsId={data.applicationsId} />
                  ) : (
                    <ApplyTableStateBadge state={data.status} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={query.page ? query.page : query} totalDataCount={totalDataCount} sliceDataValue={5} />
    </div>
  );
}

export default Table;
