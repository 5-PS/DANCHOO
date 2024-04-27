import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
          <RecuitsCard storeId={params.storeId} recruitId={params.recruitId} />
        </Suspense>
      </section>
      <section className="my-recuits-detail-section">
        <h1 className="text-[20px] font-bold mb-4 md:text-[28px] md:mb-8 ">신청자 목록</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ApplicantList searchParams={searchParams} storeId={params.storeId} recruitId={params.recruitId} />
        </Suspense>
      </section>
    </main>
  );
}

export default MyRecruitDetailPage;
