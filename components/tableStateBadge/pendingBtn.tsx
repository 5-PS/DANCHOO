'use client';

export default function PendingBtn() {
  const btnStyle =
    'px-[12px] py-[8px] text-[12px] border md:text-[14px] md:px-[20px] md:py-[10px] rounded-[6px] md:font-bold';
  // TODO: 거절, 승인 이벤트 달아주기
  const handleAcceptedBtnEvent = () => {
    console.log(1);
  };
  const handleRejectedBtnEvent = () => {
    console.log(2);
  };
  return (
    <div className="flex gap-3">
      <button type="button" className={`${btnStyle} border-red-500 text-red-500`} onClick={handleAcceptedBtnEvent}>
        거절하기
      </button>
      <button type="button" className={`${btnStyle} border-blue-20 text-blue-20`} onClick={handleRejectedBtnEvent}>
        승인하기
      </button>
    </div>
  );
}
