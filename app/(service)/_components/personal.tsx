'use client';
import Post from '@/components/post/post';

import { useQuery } from '@tanstack/react-query';
import Empty from '../my-profile/[userId]/_components/empty';
import { getPersonalNotices } from '@/services/api';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Personal() {
  const { data } = useQuery<any>({ queryKey: ['userInfo1'] });
  const favorite = data?.data.item.address;
  const notice = useQuery<any>({
    queryKey: ['notices2'],
    queryFn: () =>
      getPersonalNotices({
        address: favorite,
      }),
  });

  if (!data) {
    return (
      <Empty title="맞춤공고" desc="로그인 하고 맞춤 공고를 확인 하세요" btnText="로그인 하러 가기" href={`/signin`} />
    );
  }
  if (data.data.item.type === 'employer') {
    return <div>사장님은 안됨</div>;
  }

  if (!favorite) {
    return (
      <Empty
        title="맞춤공고"
        desc="프로필 등록 하고 맞춤 공고를 확인 하세요"
        btnText="프로필 등록 하러 가기"
        href={`/my-profile/${data.data.item.id}/edit`}
      />
    );
  }
  const filterData = notice.data?.items.filter(
    ({ item }: any) => item.closed === false && new Date() < new Date(item.startsAt),
  );

  return (
    <div className="max-w-[964px] overflow-x-scroll box">
      <h2 className="font-bold text-[28px] mb-10">맞춤 공고</h2>

      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={14}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {filterData?.map(({ item }: any) => {
          return (
            <SwiperSlide>
              <Post
                id={item.id}
                shopId={item.shop.item.id}
                address={item.shop.item.address1}
                imageUrl={item.shop.item.imageUrl}
                name={item.shop.item.name}
                hourlyPay={item.hourlyPay}
                originalHourlyPay={item.shop.item.originalHourlyPay}
                startsAt={item.startsAt}
                workhour={item.workhour}
                closed={item.closed}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
export default Personal;
