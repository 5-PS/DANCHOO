import Button from '@/components/button/button';

function RecuitsCard() {
  return (
    <div className="flex w-full gap-8 p-6 border rounded-xl border-gray-20">
      <div>
        <div className="w-[539px] h-full rounded-xl bg-fuchsia-600">사진</div>
      </div>
      <div className="flex flex-col gap-3 pt-4">
        <div>
          <span className="inline-block mb-2 font-bold text-primary">시급</span>
          <div className="font-bold text-[28px] flex gap-2 items-center">
            15,000원
            <span className=" p-3 rounded-[20px] text-white bg-primary text-[14px] h-[36px]">기존 시급보다 50% 업</span>
          </div>
        </div>
        <div className="text-gray-50">asdasda</div>
        <div className="text-gray-50">asdasda</div>
        <p className="leading-[26px]">
          알바하기 편한 너구리네 라면집! 라면 올려두고 끓이기만 하면 되어서 쉬운 편에 속하는 가게입니다.
        </p>
        <Button background="bg-white" fontSize={16}>
          공고 편집하기
        </Button>
      </div>
    </div>
  );
}

export default RecuitsCard;
