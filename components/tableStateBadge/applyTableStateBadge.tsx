interface ApplyTableStateBadgeProps {
  state: 'pending' | 'accepted' | 'rejected' | 'canceled';
}

export default function ApplyTableStateBadge({ state }: ApplyTableStateBadgeProps) {
  const badgeStyle = `${state === 'accepted' ? 'bg-blue-10 text-blue-20' : ''}${state === 'pending' ? 'bg-green-10 text-green-20' : ''}${state === 'rejected' ? 'bg-red-200 text-red-500' : ''}${state === 'canceled' ?'bg-red-200 text-red-500':'' }`;
  const badgeText = `${state === 'accepted' ? '승인 완료' : ''}${state === 'pending' ? '대기중' : ''}${state === 'rejected' ? '거절' : ''}${state === 'canceled' ?'취소':'' }`;
  return (
    <span className={`px-[10px] py-[6px] rounded-[20px] text-[12px] md:text-[14px] md:font-bold ${badgeStyle}`}>
      {badgeText}
    </span>
  );
}
