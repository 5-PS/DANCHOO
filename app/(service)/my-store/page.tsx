import Footer from '@/components/footer/footer';

import EmptyNotice from './_components/emptyStore';

/**
 * @todo 데이터가 있다면 <haveRegisteredNotice />, 없다면 <RegisteredNotice /> 예정
 */
export default function MyStore() {
  return (
    <>
      <div className="flex-col items-center justify-center ">
        <EmptyNotice />
      </div>
      <Footer />
    </>
  );
}
