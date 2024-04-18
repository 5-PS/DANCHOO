import Button from '@/components/button/button';

function RecuitsCard() {
  return (
    <>
      <div className="flex w-full gap-8 p-6 mb-6 border rounded-xl border-gray-20">
        <div>
          <div className="w-[539px] h-full rounded-xl bg-fuchsia-600">사진</div>
        </div>
        <div className="flex flex-col gap-3 pt-4">
          <div>
            <span className="inline-block mb-2 font-bold text-primary">시급</span>
            <div className="font-bold text-[28px] flex gap-2 items-center">
              15,000원
              <span className=" p-3 rounded-[20px] text-white bg-primary text-[14px] h-[36px]">
                기존 시급보다 50% 업
              </span>
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
      <div className="flex flex-col w-full gap-3 p-8 rounded-xl bg-gray-10">
        <h2 className="font-bold">공고 설명</h2>
        <p className="text-pretty">
          기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가 비네요. 급해서 시급도 높였고 그렇게 바쁜
          날이 아니라서 괜찮을거예요.
        </p>
      </div>
    </>
  );
}

export default RecuitsCard;
