import ApplicantList from './_components/applicantList';
import RecuitsCard from './_components/recruitsCard';

interface MyRecruitDetailPageProps {
  searchParams: { page: string };
  params: any;
}

function MyRecruitDetailPage({ params, searchParams }: MyRecruitDetailPageProps) {
  return (
    <main>
      <section className="my-recuits-detail-section">
        <RecuitsCard storeId={params['store-Id']} recruitId={params.recruitId} />
      </section>
      <section className="my-recuits-detail-section">
        <h1 className="text-[20px] font-bold mb-4 md:text-[28px] md:mb-8 ">신청자 목록</h1>
        <ApplicantList searchParams={searchParams} />
      </section>
    </main>
  );
}

export default MyRecruitDetailPage;
