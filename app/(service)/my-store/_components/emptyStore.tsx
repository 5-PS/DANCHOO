import Button from '@/components/button/button';

export default function EmptyNotice() {
  return (
    <div className="flex items-center justify-center w-full px-6 pt-10 pb-20 bg-neutral-50 md:pt-[60px] md:pb-[120px]">
      <div>
        <h2 className="w-[130px] text-gray-900 text-xl font-bold font-['Spoqa Han Sans Neo']">내 가게</h2>
        <div className="w-[351px] h-[195px] md:w-[632px] xl:w-[916px] mt-4 px-6 py-[60px] left-0 top-[40px]  rounded-xl border border-zinc-200 flex-col justify-center items-center gap-4 inline-flex">
          <div className="self-stretch text-center text-gray-900 text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
            내 가게를 소개하고 공고도 등록해 보세요.
          </div>
          <div className=" md:w-[346px] rounded-md justify-center items-center gap-2 inline-flex">
            <Button className="px-5 py-2 font-bold md:h-12" background="bg-primary">
              가게 등록하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 * @todo 등록된 공고 있을 때
 * @todo 가게정보 아이디가 있으면 정보를 가져오기
 */
