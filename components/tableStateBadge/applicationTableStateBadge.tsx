import ApplyTableStateBadge from './applyTableStateBadge';
import PendingBtn from './pendingBtn';

interface ApplicationTableStateBadgeProps {
  state: 'pending' | 'accepted' | 'rejected';
}

export default function ApplicationTableStateBadge({ state }: ApplicationTableStateBadgeProps) {
  if (state === 'pending') {
    return <PendingBtn />;
  }

  return <ApplyTableStateBadge state={state} />;
}
