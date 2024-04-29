import RecruitEdit from "./_components/recruitEdit";
import CloseButton from "./_components/closeButton";


export default function recruitEditPage() {
  return (
    <div className="flex flex-col w-full gap-6 px-3 pt-10 pb-20 md:py-[60px] md:px-0 md:w-full md:max-w-[680px] md:m-auto xl:max-w-[946px]">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold md:text-[28px]">가게 정보 수정</h1>
      <CloseButton/>
    </div>
    <RecruitEdit />
  </div>
  );
}
