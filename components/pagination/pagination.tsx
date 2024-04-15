import Image from 'next/image';
import Link from 'next/link';

function Pagination({ page, pageLength }: { page: string; pageLength: number }) {
  const pageNum = parseInt(page, 10);
  const activeNextBtn = pageLength > 7 && Math.ceil(pageNum / 7) !== Math.ceil(pageLength / 7);
  const isBoundaryPage = Number.isInteger(pageNum / 7);
  const pageCount = isBoundaryPage ? Math.floor(pageNum / 7) - 1 : Math.floor(pageNum / 7);
  const isDisabledPrevBtn =
    Math.ceil(pageNum / 7) === 1 ? (
      <Image src="/icons/previcondisabled.svg" width={20} height={20} alt="이전 버튼 비활성화 아이콘" />
    ) : (
      <Link href={`/?page=${isBoundaryPage ? (pageNum / 7 - 1) * 7 : Math.floor(pageNum / 7) * 7}`}>
        <Image src="/icons/previcon.svg" width={20} height={20} alt="이전 버튼 아이콘" />
      </Link>
    );
  const activePrevBtn = pageLength > 7;
  return (
    <div className="w-full py-[8px] px-[12px] flex justify-center items-center ">
      <div className="flex gap-[20px] items-center">
        {activePrevBtn && isDisabledPrevBtn}
        <div className="flex gap-[2px]">
          {Array.from({ length: pageLength }, (_, index) => index + 1)
            .slice(pageCount * 7, pageCount * 7 + 7)
            .map((number) => (
              <Link
                className={`w-[40px] h-[40px] p-[12px] rounded-[4px] text-[14px] leading-[18px] inline-block text-center ${pageNum === number && 'bg-red-20 text-white'}`}
                href={`/?page=${number}`}
              >
                {number}
              </Link>
            ))}
        </div>
        {activeNextBtn && (
          <Link href={`/?page=${isBoundaryPage ? (pageNum / 7) * 7 + 1 : Math.floor(pageNum / 7 + 1) * 7 + 1}`}>
            <Image src="/icons/nexticon.svg" width={20} height={20} alt="이전 버튼 아이콘" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Pagination;
