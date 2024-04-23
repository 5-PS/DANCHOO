import Footer from '@/components/footer/footer';

import TestHaveRegisteredNotice from './_components/haveRegisteredNotice';
import MyStoreCard from './_components/myStoreCard';
import RegisteredNotice from './_components/registeredNotice';

/**
 * @todo 데이터가 있다면 <haveRegisteredNotice />, 없다면 <RegisteredNotice /> 예정
 */
export default function MyStore() {
  return (
    <>
      <div className="flex-col items-center justify-center ">
        <MyStoreCard />
        <RegisteredNotice />
        <TestHaveRegisteredNotice />
      </div>
      <Footer />
    </>
  );
}
