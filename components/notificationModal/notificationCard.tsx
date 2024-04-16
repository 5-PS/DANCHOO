import { format as dateFnsFormat, formatDistanceToNowStrict, parseISO as parseDate, addHours } from 'date-fns';
import { ko } from 'date-fns/locale';

interface NotificationCardProps {
  createdAt: string;
  result: string;
  shop: {
    name: string;
    imageUrl: string;
  };
  notice: {
    startsAt: string;
    workhour: number;
  };
}

function NotificationCard({ createdAt, result, shop, notice }: NotificationCardProps) {
  const elapsedTime = formatDistanceToNowStrict(parseDate(createdAt), { locale: ko });
  const { startsAt, workhour } = notice;

  const startsAtDate = parseDate(startsAt);
  const endAtDate = addHours(startsAtDate, workhour);
  const formattedStartTime = dateFnsFormat(startsAtDate, 'yyyy-MM-dd HH:mm');
  const formattedEndTime = dateFnsFormat(endAtDate, 'HH:mm');

  return (
    <li className="flex flex-col gap-1 px-3 py-4 bg-white border border-gray-200 rounded-md ">
      <div className={`w-[5px] h-[5px] ${result === 'accepted' ? 'bg-blue-20' : 'bg-red-40'}  rounded-full`} />
      <p className="text-sm">
        {`${shop.name}(${formattedStartTime}~${formattedEndTime})공고 지원이`}
        {result === 'accepted' ? (
          <span className="text-blue-20"> 승인</span>
        ) : (
          <span className="text-red-40"> 거절</span>
        )}
        되었어요.
      </p>
      <span className="text-xs text-gray-40">{`${elapsedTime} 전`}</span>
    </li>
  );
}

export default NotificationCard;
