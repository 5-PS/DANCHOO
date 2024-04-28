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
import { useEffect, useState } from 'react';
import { decodeJWT, getCookie } from '@/utils/getCookie';
import { getUser } from '@/components/gnb/authButton';
function Personal() {
  
  const [token, setToken] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [favoriteRecruits, setFavoriteRecruits] = useState<any>(null);

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    if(accessToken){
      setToken(accessToken);
    }
  }, []);
  
  useEffect(() => {
    if(token){
      const userId = decodeJWT(token);
      const requestUserData = async (id : string) => {
        const {data} = await getUser(id);
        const userInfo = {
          id : data.item.id,
          type : data.item.type,
          address : data.item.type === 'employee'  &&  data.item.address,
        }
        setUserData(userInfo)
      }
      requestUserData(userId);
    }
  },[token])

  useEffect(() => {
    if(userData?.address){
      const getFilterRecruits = async () => {
        const {items} = await getPersonalNotices(userData);
        const filterRecruits  = items.filter(({item} : any) => item.closed === false && new Date() < new Date(item.startsAt))
        setFavoriteRecruits(filterRecruits);
      }
      getFilterRecruits()
    }
  },[userData])


  if (!token) {
    return (
      <Empty title="맞춤공고" desc="로그인 하고 맞춤 공고를 확인 하세요" btnText="로그인 하러 가기" href={`/signin`} />
    );
  }

  if (userData?.type === 'employer') {
    return <div className='flex justify-center items-center text-[32px] font-bold text-gray-30 xl:h-[417px]'>사장님은 맞춤공고를 이용할 수 없어요</div>;
  }

  if (!userData?.address) {
    return (
      <Empty
        title="맞춤공고"
        desc="프로필 등록 하고 맞춤 공고를 확인 하세요"
        btnText="프로필 등록 하러 가기"
        href={`/my-profile/${userData?.id}/edit`}
      />
    );
  }

  return (
    <div className="max-w-[964px] overflow-x-scroll box">
      <h2 className="font-bold text-[28px] mb-10">맞춤 공고</h2>
      {
        favoriteRecruits?.length ? (
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
          {favoriteRecruits?.map(({ item }: any) => {
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
        ) : <div>선호 주소에 맞는 맞춤공고가 존재하지 않습니다</div>
      }
    
    </div>
  );
}
export default Personal;
