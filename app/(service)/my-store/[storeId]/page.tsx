import Footer from '@/components/footer/footer';

import MyStoreCard from './_components/myStoreCard';

export default function MyStore() {
  return (
    <>
      <div className="flex-col items-center justify-center ">
        <div className="mt-10 ">
          <h2 className="text-black text-[28px] font-bold mb-6 w-[351px] xl:w-[964px] mx-auto md:w-[632px] border-gray-20 md:mb-6">
            기업 정보
          </h2>
          <MyStoreCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
