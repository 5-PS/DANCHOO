import Footer from '@/components/footer/footer';

import EmptyNotice from './_components/emptyStore';

export default function MyStore() {
  return (
    <>
      <div className="flex-col items-center justify-center">
        <EmptyNotice />
      </div>
      <Footer />
    </>
  );
}
