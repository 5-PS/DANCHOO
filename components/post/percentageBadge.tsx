import Image from 'next/image';

interface PercentageBadgeProps {
  closed: boolean;
  percentage: number;
}
function PercentageBadge({ closed, percentage }: PercentageBadgeProps) {
  return (
    <div
      className={`flex justify-start items-center gap-0.5 md:p-3 md:rounded-[20px] md:h-9 ${closed ? 'md:bg-gray-20' : 'md:bg-red-40'}`}
    >
      <div
        className={`text-xs text-center whitespace-nowrap text-ellipsis overflow-hidden max-w-[125px] md:text-white md:font-bold ${closed ? 'text-gray-30' : 'text-red-40'}`}
      >
        {`기존 시급보다 ${percentage}%`}
      </div>
      <Image className="max-[767px]:hidden" src="/icons/arrow-white.svg" width={12} height={12} alt="위치 아이콘" />
      <Image
        className="md:hidden"
        src={`${closed ? '/icons/arrow-gray.svg' : '/icons/arrow-red.svg'}`}
        alt="화살표 아이콘"
        width={12}
        height={12}
      />
    </div>
  );
}
export default PercentageBadge;
