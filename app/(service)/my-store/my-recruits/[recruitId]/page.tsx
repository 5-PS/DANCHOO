import RecuitsCard from './_components/recruitsCard';

function MyRecruitDetailPage() {
  return (
    <>
      <div className="w-full h-[70px] bg-black text-white">헤더부분</div>
      <main>
        <section className="py-[60px] max-w-[964px] m-auto ">
          <div className="mb-6 ">
            <span className="inline-block mb-2 font-bold">식당</span>
            <h1 className="text-[28px] font-bold">도토리 식당</h1>
          </div>
          <RecuitsCard />
        </section>
      </main>
    </>
  );
}

export default MyRecruitDetailPage;
