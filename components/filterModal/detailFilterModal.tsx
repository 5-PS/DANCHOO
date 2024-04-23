'use client';

import { ChangeEvent, useState } from 'react';
import DatePicker from 'react-datepicker';

import Image from 'next/image';

import 'react-datepicker/dist/react-datepicker.css';
import Button from '../button/button';

const ADDRESS_LIST = [
  '서울시 종로구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 광진구',
  '서울시 동대문구',
  '서울시 중랑구',
  '서울시 성북구',
  '서울시 강북구',
  '서울시 도봉구',
  '서울시 노원구',
  '서울시 은평구',
  '서울시 서대문구',
  '서울시 마포구',
  '서울시 양천구',
  '서울시 강서구',
  '서울시 구로구',
  '서울시 금천구',
  '서울시 영등포구',
  '서울시 동작구',
  '서울시 관악구',
  '서울시 서초구',
  '서울시 강남구',
  '서울시 송파구',
  '서울시 강동구',
];
// Todo: key값 수정, 적용하기 버튼 onClick 이벤트 추가하기, ESlint 들여쓰기 이슈 고치기
function DetailFilterModal() {
  const [activeModal, setActiveModal] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [clickAddressList, setClickAddressList] = useState<string[]>([]);
  const [filterAddressList, setFilterAddressList] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [amount, setAmount] = useState<number | null>();
  const handleDeleteClickAddressListItem = (address: string) => {
    const filterList = clickAddressList.filter((item) => item !== address);
    setClickAddressList(filterList);
  };
  const handleAddClickAddressListItem = (address: string) => {
    if (clickAddressList.includes(address)) {
      handleDeleteClickAddressListItem(address);
      return;
    }
    const addressAddArr = [...clickAddressList, address];
    setClickAddressList(addressAddArr);
  };
  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };
  const handleSearchAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    const reg = new RegExp(`${searchValue}`);
    const filterArr = ADDRESS_LIST.filter((address) => reg.test(address));
    setFilterAddressList(filterArr);
  };
  const handleResetEvent = () => {
    setStartDate(null);
    setAmount(null);
    setClickAddressList([]);
  };
  return (
    <div className="relative w-[88px]">
      <button
        type="button"
        className="text-[14px] rounded-[5px] bg-red-30 font-bold px-[12px] py-[6px] text-white"
        onClick={() => setActiveModal((prev) => !prev)}
      >
        상세 필터
      </button>
      <div
        className={`w-full h-screen px-[12px] py-[24px] overflow-y-auto z-50 bg-white m-auto fixed top-0 left-0 md:w-[390px] md:h-[auto] md:px-[20px] md:py-[24px] md:rounded-[10px] md:border md:border-gray-20 md:absolute md:top-[120%] md:-left-[302px]  ${!activeModal && 'hidden'}`}
      >
        <div className="text-[20px] mb-[24px] flex justify-between">
          <strong>상세 필터</strong>
          <button type="button" onClick={() => setActiveModal(false)}>
            <Image src="/icons/close-modal-icon.svg" width={24} height={24} alt="모달 닫기 아이콘" />
          </button>
        </div>
        <div className="flex flex-col gap-[24px] mb-[40px]">
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center justify-between">
              위치
              <input
                className="border border-gray-20 px-[12px] py-[8px] text-[12px] rounded-[5px]"
                type="text"
                placeholder="검색할 주소를 입력해주세요"
                value={searchValue}
                onChange={handleSearchAddress}
              />
            </div>
            <ul className="w-full h-[258px] text-[14px] border border-gray-20 rounded-[6px] overflow-y-auto grid  grid-cols-2 gap-y-[20px] px-[28px] py-[20px]">
              {searchValue
                ? filterAddressList.map((address) => (
                    <li key={address}>
                      <button
                        type="button"
                        className={`${clickAddressList.indexOf(address) !== -1 && 'font-bold text-primary'}`}
                        onClick={() => handleAddClickAddressListItem(address)}
                      >
                        {address}
                      </button>
                    </li>
                  ))
                : ADDRESS_LIST.map((address) => (
                    <li key={address}>
                      <button
                        type="button"
                        className={`${clickAddressList.indexOf(address) !== -1 && 'font-bold text-primary'}`}
                        onClick={() => handleAddClickAddressListItem(address)}
                      >
                        {address}
                      </button>
                    </li>
                  ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-[8px]">
            {clickAddressList.map((address) => (
              <span className="px-[10px] py-[6px] rounded-[20px] inline-flex gap-[4px] bg-red-10  text-primary text-[14px]">
                <strong>{address}</strong>
                <button type="button" onClick={() => handleDeleteClickAddressListItem(address)}>
                  <Image src="/icons/delete-label-icon.svg" width={16} height={16} alt="라벨 삭제 아이콘" />
                </button>
              </span>
            ))}
          </div>
          <div className="h-[2px] bg-gray-10" />
          <div className="flex flex-col gap-[8px] min-h-[98px]">
            <p>시작일</p>
            <DatePicker
              className="w-full px-[20px] py-[16px] border border-gray-30 rounded-[6px]"
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              placeholderText="시작일을 선택해주세요"
              dateFormat="yyyy년 MM월 d일"
            />
          </div>
          <div className="h-[2px] bg-gray-10" />
          <div className="flex flex-col gap-[8px]">
            <p>금액</p>
            <div className="flex gap-[12px] items-center">
              <div className="px-[20px] py-[16px] w-[169px] border border-gray-30 rounded-[6px] flex ">
                <input
                  className="w-full outline-none "
                  type="number"
                  placeholder="입력"
                  value={amount || ''}
                  onChange={handleChangeAmount}
                />
                <span>원</span>
              </div>
              이상부터
            </div>
          </div>
        </div>
        <div className="flex gap-[8px] justify-between">
          <span className="w-[82px]">
            <Button background="bg-white" fontSize={16} onClick={handleResetEvent}>
              초기화
            </Button>
          </span>
          <span className="w-[260px] flex-1">
            <Button background="bg-primary" fontSize={16} onClick={() => console.log('1')}>
              적용하기
            </Button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default DetailFilterModal;
