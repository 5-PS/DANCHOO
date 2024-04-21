export const LIMIT_PAGE_COUNT_NUM = 7;
// 이전 버튼, 다음 버튼 눌렀을 때 이동해야할 페이지 값 계산 함수
export function calculateMovePageValue(pageValue: number, isBoundaryPage: boolean): number[] {
  const prevBtnPageValue = isBoundaryPage
    ? (pageValue / LIMIT_PAGE_COUNT_NUM - 1) * LIMIT_PAGE_COUNT_NUM
    : Math.floor(pageValue / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM;
  const nextBtnPageValue = isBoundaryPage
    ? (pageValue / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM + 1
    : Math.ceil(pageValue / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM + 1;

  return [prevBtnPageValue, nextBtnPageValue];
}
// 페이지 배열 자르는 인수 값 계산하는 함수
export function calculateSliceValue(pageValue: number, isBoundaryPage: boolean): number {
  const calculateValue = isBoundaryPage
    ? (Math.floor(pageValue / LIMIT_PAGE_COUNT_NUM) - 1) * LIMIT_PAGE_COUNT_NUM
    : Math.floor(pageValue / LIMIT_PAGE_COUNT_NUM) * LIMIT_PAGE_COUNT_NUM;
  return calculateValue;
}
// 이전 버튼, 다음버튼 활성화 여부 계산 함수
export function isActiveControllBtn(pageValue: number, pageLength: number) {
  const isActivePrevBtn = Math.ceil(pageValue / LIMIT_PAGE_COUNT_NUM) === 1;
  const isActiveNextBtn = Math.ceil(pageValue / LIMIT_PAGE_COUNT_NUM) !== Math.ceil(pageLength / LIMIT_PAGE_COUNT_NUM);
  return [isActivePrevBtn, isActiveNextBtn];
}
