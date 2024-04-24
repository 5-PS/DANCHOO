import Table from '@/components/table/table';

interface ApplicantListProps {
  searchParams: { page: string };
}
export default function ApplicantList({ searchParams }: ApplicantListProps) {
  return <Table query={searchParams} type="applicantList" />;
}
