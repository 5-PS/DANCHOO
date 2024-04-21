import Button from '@/components/button/button';

// TODO: 시급비교 라벨 따로빼기, 주소, 시간 아이콘 넣기

function RecuitsCard() {
  return (
    <>
      <div className="flex flex-col w-full gap-3 p-5 mb-3 border rounded-xl border-gray-20 md:p-6 md:mb-6 md:gap-4 xl:flex-row xl:gap-8">
        <div className="w-full h-[178px] md:h-[361px] xl:h-auto">
          <div className="h-full rounded-xl bg-red-20" />
        </div>
        <div className="flex flex-col gap-2 xl:pt-4 md:gap-3 md:max-w-full xl:max-w-[346px] xl:w-full">
          <div>
            <span className="inline-block mb-2 font-bold text-primary text-[14px] md:text-[16px]">시급</span>
            <div className="font-bold text-[24px] flex gap-2 items-center md:text-[28px]">
              15,000원
              <span className=" p-3 rounded-[20px] text-white bg-primary text-[14px] h-[36px] max-md:text-[12px] max-md:p-2 max-md:h-auto">
                기존 시급보다 50% 업
              </span>
            </div>
          </div>
          <div className="text-gray-50 text-[14px] md:text-[16px]">시간 들어가는 곳</div>
          <div className="text-gray-50 text-[14px] md:text-[16px]">주소 들어가는 곳</div>
          <p className="leading-[26px] text-[14px] md:text-[16px] line-clamp-2">
            알바하기
            ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅁㄴㅇㅁㄴㅁㅇㅁㅇㅇㅁㄴㅇㅁㄴㄴ옹멂엄넒낭ㄹㄹ어ㅏ아엃ㄹㄹ앙
          </p>
          <Button background="bg-white" fontSize={16}>
            공고 편집하기
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-5 rounded-xl bg-red-10 text-[14px] md:text-[16px] md:p-8 md:gap-3">
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
