import ApplyTableStateBadge from './applyTableStateBadge';
import PendingBtn from './pendingBtn';

interface ApplicationTableStateBadgeProps {
  state: 'pending' | 'accepted' | 'rejected';
  applicationsId?: string;
}

export default function ApplicationTableStateBadge({ state, applicationsId }: ApplicationTableStateBadgeProps) {
  if (state === 'pending') {
    return <PendingBtn applicationsId={applicationsId} />;
  }

  return <ApplyTableStateBadge state={state} />;
}
