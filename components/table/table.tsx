import Pagination from '../pagination/pagination';
import ApplicationTableStateBadge from '../tableStateBadge/applicationTableStateBadge';
import ApplyTableStateBadge from '../tableStateBadge/applyTableStateBadge';

// api가 없어 만든 임시 데이터 입니다.
const STORE_INFORMATION: {
  title: string;
  date: string;
  money: number;
  state: 'pending' | 'accepted' | 'rejected';
}[] = [
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'rejected',
  },
  {
    title: '너구리네 국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'accepted',
  },
  {
    title: '너구리네 돈까스집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'accepted',
  },
  {
    title: '너구리네 짜장면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 카레집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 우동집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 몰라',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 밥집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 한식집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 술집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 피시방',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 놀이공원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 기둥',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 흠 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 진짜 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 학원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㄴㅇ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴㅇㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'choose',
  },
  {
    title: '너구리네 국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'approve',
  },
  {
    title: '너구리네 돈까스집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 짜장면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 카레집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 우동집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 몰라',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 밥집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 한식집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 술집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 피시방',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 놀이공원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 기둥',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 흠 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 진짜 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 학원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㄴㅇ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴㅇㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pending',
  },
];

function Table({ query, type }: { query: { page: string }; type: 'applicantList' | 'applyList' }) {
  const defaultQueryPage = query.page || '1';
  const sliceIndex = (parseInt(defaultQueryPage, 10) - 1) * 5;
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
              <th className="tb-head w-[165px] md:w-[236px]">상태</th>
            </tr>
          </thead>
          <tbody>
            {STORE_INFORMATION.slice(sliceIndex, sliceIndex + 5).map((store) => (
              <tr className="text-[14px]  md:text-[16px] border-b border-gray-20 h-[52px]">
                <td className="sticky left-0 bg-white tb-data ">{store.title}</td>
                <td className="tb-data ">{store.date}</td>
                <td className="tb-data ">{store.money}</td>
                <td className="tb-data " aria-label="badge">
                  {type === 'applicantList' ? (
                    <ApplicationTableStateBadge state={store.state} />
                  ) : (
                    <ApplyTableStateBadge state={store.state} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={query.page} totalDataCount={STORE_INFORMATION.length} sliceDataValue={5} />
    </div>
  );
}

export default Table;
