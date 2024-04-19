const LIMIT_PAGE_COUNT_NUM = 7;
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
