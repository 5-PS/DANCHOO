import Button from '@/components/button/button';

function MyProfile() {
  const List = {
    name: '김영은',
    phone: '010-1234-1234',
    address: '서울시 종로구',
    desc: '뽑아만 주신다면 열심히 최선을 다 해 이 몹 다할때까지 일하겠습니다.',
  };

  return (
    <>
      <section>
        <div className="max-w-[957px] m-auto py-[60px] p-[32px]">
          <h2 className="font-bold text-[28px] mb-10">내 프로필</h2>
          <div className="bg-white  shadow-modal-box p-[32px]">
            <div className="flex justify-between">
              <div className="text-[20px]">{List.name}</div>
              <div className="w-[200px]">
                <Button background="bg-white" fontSize={16} height={37}>
                  편집하기
                </Button>
              </div>
            </div>
            <div>{List.phone}</div>
            <div>{List.address}</div>
            <div>{List.desc}</div>
          </div>
        </div>
      </section>
      <section className=" bg-red-10">
        {/* 공통 컴포넌트로 만들예정 */}
        <div className="max-w-[957px] m-auto  py-[60px]">
          <h2 className="font-bold text-[28px] px-[32px] mb-10">신청 내역</h2>
          <div className="px-[32px]">
            <div className="flex flex-col gap-6 items-center justify-center h-10 border rounded py-[60px]">
              <p>아직 신청 내역이 없어요.</p>
              <Button background="bg-white" fontSize={16} height={37}>
                공고 보러가기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MyProfile;
