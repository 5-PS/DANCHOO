import Footer from '@/components/footer/footer';

import RecentlyViewedRecruits from './_components/recentlyViewedRecruits';
import RecruitCard from './_components/recruitCard';

interface RecruitDetailProps {
  params: {
    shopId: string;
    recruitId: string;
  };
}

function RecruitDetail({ params }: RecruitDetailProps) {
  const { shopId, recruitId } = params;
  return (
    <main>
      <section className="flex flex-col gap-4 px-3 py-10 max-w-[964px] m-auto md:px-8 md:py-[60px] md:gap-6 ">
        <RecruitCard shopId={shopId} recruitId={recruitId} />
      </section>

      <section className="px-3 pt-10 pb-20 max-w-[964px] m-auto md:px-8 md:py-[60px] xl:pb-[120px]">
        <h2 className="mb-4 text-xl font-bold text-black md:mb-8 md:text-[28px]">최근에 본 공고</h2>
        <RecentlyViewedRecruits />
      </section>
      <Footer />
    </main>
  );
}
export default RecruitDetail;
