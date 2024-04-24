import Image from 'next/image';

interface PercentageBadgeProps {
  isClosed: boolean;
  percentage: number;
}

function PercentageBadge({ isClosed, percentage }: PercentageBadgeProps) {
  if (isClosed) return null;
  return (
    percentage >= 5 && (
      <div className="flex justify-start items-center gap-0.5 p-3 rounded-[20px] h-9 bg-red-40">
        <p className="text-xs text-center whitespace-nowrap overflow-hidden max-w-[125px] text-white font-bold">
          {`기존 시급보다 ${percentage}%`}
        </p>
        <Image src="/icons/arrow-white.svg" alt="화살표 아이콘" width={12} height={12} />
      </div>
    )
  );
}

export default PercentageBadge;
