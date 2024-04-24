import Image from 'next/image';
// TODO 검색 로직 만들어야 함
function SearchBar() {
  return (
    <form className="flex items-center w-full gap-2 p-2 bg-gray-10 rounded-[10px] md:w-[344px] xl:w-[400px]">
      <Image src="/icons/search.svg" width={20} height={20} alt="로고" />
      <input
        className="flex-1 outline-none bg-gray-10 placeholder:text-gray-40 placeholder:text-xs"
        type="text"
        placeholder="가게 이름으로 찾아보세요"
      />
    </form>
  );
}
export default SearchBar;
