import LinkMyStore from './_components/linkMyStore';
import RegistRecruitForm from './_components/registRecruitForm';

/** @todo href이동페이지 변경 */
export default function RegistRecruitPage() {
  return (
    <div className="w-full px-3 pt-10 pb-20 md:py-[60px] md:max-w-[680px] md:m-auto xl:max-w-[964px]">
      <div className="flex items-center justify-between mb-6 md:mb-8 ">
        <h1 className="text-xl font-bold md:text-[28px]">공고 등록</h1>
        <LinkMyStore />
      </div>
      <RegistRecruitForm />
    </div>
  );
}
