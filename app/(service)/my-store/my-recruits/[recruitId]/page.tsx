import Footer from '@/components/footer/footer';
import Table from '@/components/table/table';

import RecuitsCard from './_components/recruitsCard';

function MyRecruitDetailPage({ searchParams }) {
  return (
    <>
      <div className="w-full h-[70px] bg-black text-white">헤더부분</div>
      <main>
        <section className="py-[60px] max-w-[964px] m-auto max-xl:max-w-[680px] max-md:py-10 max-md:max-w-full max-md:px-3">
          <div className="mb-6 ">
            <span className="inline-block mb-2 font-bold text-primary max-md:text-[14px]">식당</span>
            <h1 className="text-[28px] font-bold max-md:text-[20px]">도토리 식당</h1>
          </div>
          <RecuitsCard />
        </section>
        <section className="py-[60px] max-w-[964px] m-auto max-xl:max-w-[680px] max-md:py-10 max-md:max-w-full max-md:px-3">
          <h1 className="text-[28px] font-bold mb-8">신청자 목록</h1>
          <Table query={searchParams} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default MyRecruitDetailPage;
