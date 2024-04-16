import Pagination from '../pagination/pagination';

interface StateBadgeProps {
  state: 'pedding' | 'approve' | 'choose';
}
// api가 없어 만든 임시 데이터 입니다.
const STORE_INFORMATION: {
  title: string;
  date: string;
  money: number;
  state: 'pedding' | 'approve' | 'choose';
}[] = [
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
    state: 'pedding',
  },
  {
    title: '너구리네 짜장면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 카레집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 우동집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 몰라',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 밥집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 한식집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 술집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 피시방',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 놀이공원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 기둥',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 흠 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 진짜 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 학원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴㅇㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
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
    state: 'pedding',
  },
  {
    title: '너구리네 짜장면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 카레집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 우동집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 몰라',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 밥집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 한식집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 술집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 피시방',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 놀이공원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 기둥',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 흠 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 진짜 뭐하지',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 학원',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㄴㅇㅁㄴㅇㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 라면집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 칼국수집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅁㅁㅁ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 코딩집',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
  {
    title: '너구리네 ㅠㅠㅠㅠ',
    date: '2023.01.12~12:00 (2시간)',
    money: 12500,
    state: 'pedding',
  },
];
// TODO: 뱃지 컴포넌트로 따로 분리하기
function StateBadge({ state }: StateBadgeProps) {
  if (state === 'pedding') {
    return (
      <span className="state-badge bg-green-10 text-green-20">
        <strong>대기중</strong>
      </span>
    );
  }
  if (state === 'approve') {
    return (
      <span className="state-badge bg-blue-10 text-blue-20">
        <strong>승인 완료</strong>
      </span>
    );
  }
  if (state === 'choose') {
    return (
      <div className="flex gap-[8px]">
        <button
          type="button"
          className="px-[12px] py-[8px] text-[10px] rounded-[6px] border border-red-40 text-red-40 md:px-[20px] md:py-[10px] md:text-[14px]"
        >
          <strong>거절하기</strong>
        </button>
        <button
          type="button"
          className="px-[12px] py-[8px] text-[10px]  rounded-[6px] border border-blue-20 text-blue-20 md:px-[20px] md:py-[10px] md:text-[14px]"
        >
          <strong>승인하기</strong>
        </button>
      </div>
    );
  }
}

function Table({ query }: { query: { page: string } }) {
  const isDefault = query.page ? query.page : '1';
  const pageLength = Math.ceil(STORE_INFORMATION.length / 5);
  const sliceIndex = (parseInt(isDefault, 10) - 1) * 5;
  return (
    <div className="relative w-full max-w-[964px] overflow-hidden border border-gray-20 rounded-[10px] bg-white m-auto">
      <div className="overflow-x-auto ">
        <table className="w-[801px] border-spacing-0 border-collapse md:w-[962px]">
          <thead>
            <tr className="h-[40px] text-[12px] border-b text-left border-gray-20 bg-red-10 md:text-[14px] md:h-[50px]">
              <th className="tb-head w-[186px] sticky left-0  md:w-[226px] bg-red-10">가게</th>
              <th className="tb-head w-[270px] md:w-[300px]">일자</th>
              <th className="tb-head w-[180px]  md:w-[200px]">시급</th>
              <th className="tb-head w-[165px] md:w-[236px]">상태</th>
            </tr>
          </thead>
          <tbody>
            {STORE_INFORMATION.slice(sliceIndex, sliceIndex + 5).map((store) => (
              <tr className="text-[14px]  md:text-[16px] border-b border-gray-20 h-[50px]">
                <td className="sticky left-0 bg-white tb-data ">{store.title}</td>
                <td className="tb-data ">{store.date}</td>
                <td className="tb-data ">{store.money}</td>
                <td className="tb-data " aria-label="badge">
                  <StateBadge state={store.state} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={isDefault} pageLength={pageLength} />
    </div>
  );
}

export default Table;
