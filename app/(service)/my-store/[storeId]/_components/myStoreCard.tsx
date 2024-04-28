'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import Button from '@/components/button/button';
import { getMyStore, getStoreNotice } from '@/services/api';

import HaveRegisteredNotice from './haveRegisteredNotice';
import RegisteredNotice from './registeredNotice';
import useModal from '@/hooks/useModal';

/**
 * @todo 처음에 가게 정보 없을 때 보여줄 가게없음 보이게 => 없을 때에는 가게 등록하기 보이게
 * @todo 편집하기 누르면 가게 정보 편집 페이지로
 * @todo 공고 등록하기 페이지를 누르면 공고 등록하기 페이지로 이동
 * @todo 내가 등록한 공고 무한스크롤로, 최신순으로 정렬하고,
 */

export interface StoreDataType {
  imageUrl: string;
  category: string;
  name: string;
  address1: string;
  description: string;
  originalHourlyPay: number;
}

export interface NoticeDataType {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    closed: boolean;
  };
}

const NUMBER_OF_POSTS_TO_FETCH = 3;

export default function MyStoreCard() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [noticeData, setNoticeData] = useState<NoticeDataType[]>([]);
  const [storeData, setStoreData] = useState<StoreDataType>({
    imageUrl: '/icons/loading.svg',
    category: '',
    name: '',
    address1: '',
    description: '',
    originalHourlyPay: 0,
  });

  const observer = useRef<IntersectionObserver>();
  
  const { storeId }: { storeId: string } = useParams();

  const {openModal} = useModal();

  const loadMoreNotices = useCallback(async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);

    try {
      const {items} = await getStoreNotice(storeId, noticeData.length, NUMBER_OF_POSTS_TO_FETCH);
      setNoticeData((prevNotices) => [...prevNotices, ...items]);
      setHasMore(items.length === NUMBER_OF_POSTS_TO_FETCH);
    } catch (error) {
      openModal({type: 'caution', content: '추가 공고를 불러오는 데 실패했습니다.'})
    } finally {
      setLoading(false)
    }
}, [loading, hasMore, noticeData.length])

const lastNoticeElementRef = useCallback((node: HTMLElement | null) => {
  if (loading) return;

  if (observer.current) observer.current.disconnect();
  observer.current = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && hasMore) {
      loadMoreNotices();
    }
  })

  if (node) observer.current.observe(node);
}, [loading, hasMore, loadMoreNotices])

  useEffect(() => {
    (async () => {
      const { item } = await getMyStore(storeId);
      setStoreData(item);
    })();

    (async () => {
      const data = await getStoreNotice(storeId, 0, 6);
      setNoticeData(data.items)
      setCount(data.count);
    })();
  }, []);

  return (
    <>
      <div className=" bg-red-10 flex flex-col w-[351px] xl:w-[964px] gap-3 p-5 mx-auto mb-3 md:w-[632px] border rounded-xl border-gray-20 md:p-6 md:mb-6 md:gap-4 xl:flex-row xl:gap-8 ">
        <div className=" rounded-lg overflow-hidden w-[311px] h-[177px] md:max-w-full md:w-[632px] md:h-[361px] xl:w-[539px] xl:h-[308px]  bg-slate-500 relative">
          <Image src={storeData.imageUrl} alt="가게이미지" fill priority />
        </div>
        <div className="flex flex-col justify-between xl:w-[343px] ">
          <div className="flex flex-col gap-2 xl:pt-4 md:gap-3">
            <div>
              <span className="inline-block mb-2 font-bold text-primary text-[14px] md:text-[16px]">
                {storeData.category}
              </span>
              <div className="font-bold text-[24px] flex gap-2 items-center md:text-[28px]">{storeData.name}</div>
            </div>
            <div className="flex gap-[6px]">
              <Image src="/icons/location-red.svg" alt="위치아이콘" width={16} height={16} />
              <div className="text-sm font-normal leading-snug text-zinc-500 ">{storeData.address1}</div>
            </div>
            <p className="leading-[26px] text-[14px] md:text-[16px] line-clamp-3">{storeData.description}</p>
          </div>
          <div className="flex gap-2 ">
            <Link href={`/my-store/${storeId}/edit`} className="w-full">
              <Button background="bg-white" className="py-2 font-bold font-pretendard">
                편집하기
              </Button>
            </Link>
            <Link href={`/my-store/${storeId}/my-recruits/edit`} className="w-full">
              <Button background="bg-primary" className="py-2 font-bold">
                공고 등록하기
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {count === 0 ? (
        <RegisteredNotice />
      ) : (
        <>
          <HaveRegisteredNotice noticeData={noticeData} storeData={storeData} storeId={storeId} />
          <div ref={lastNoticeElementRef}/>
        </>
      )}
    </>
  );
}
