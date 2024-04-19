const LIMIT_PAGE_COUNT_NUM = 7;
// 이전 버튼, 다음 버튼 눌렀을 때 이동해야할 페이지 값 계산 함수
function calculateMovePageValue(pageQueryValue: string) {
  const pageNum = parseInt(pageQueryValue, 10);
  const isBoundaryPage = Number.isInteger(pageNum / LIMIT_PAGE_COUNT_NUM);
  const prevBtnPageValue = isBoundaryPage
    ? (pageNum / LIMIT_PAGE_COUNT_NUM - 1) * LIMIT_PAGE_COUNT_NUM
    : Math.floor(pageNum / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM;
  const nextBtnPageValue = isBoundaryPage
    ? (pageNum / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM + 1
    : Math.ceil(pageNum / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM + 1;

  return [prevBtnPageValue, nextBtnPageValue];
}

export default calculateMovePageValue;
