import { format as dateFnsFormat, parseISO as parseDate, addHours } from 'date-fns';

const formatDateRange = (startsAt: string, workhour: number) => {
  const startsAtDate = parseDate(startsAt);
  const endAtDate = addHours(startsAtDate, workhour);
  const formattedStartTime = dateFnsFormat(startsAtDate, 'yyyy-MM-dd HH:mm');
  const formattedEndTime = dateFnsFormat(endAtDate, 'HH:mm');

  return `${formattedStartTime}~${formattedEndTime}`;
};

export default formatDateRange;
