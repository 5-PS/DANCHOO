import DetailFilterModal from '@/components/filterModal/detailFilterModal';
import SelectInput from '@/components/input/selectInput';
import Pagination from '@/components/pagination/pagination';
import Post from '@/components/post/post';

export default function Home({ searchParams }) {
  const List = {
    offset: 0,
    limit: 10,
    count: 20,
    hasNext: true,
    address: ['서울 강남구 역삼동 123번지', '서울 마포구 서교동 456번지'],
    keyword: '파트타임',
    items: [
      {
        item: {
          id: '1',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '2',
          hourlyPay: 15000,
          startsAt: '2024-04-20T13:00:00Z',
          workhour: 6,
          description: '유연한 파트타임 직원 모집',
          closed: false,
          shop: {
            item: {
              id: '456',
              name: 'XYZ 서점',
              category: '서점',
              address1: '서울 마포구 서교동 456번지',
              address2: '',
              description: '소설과 논픽션을 전문으로 하는 지역 서점',
              imageUrl: 'https://example.com/xyz-bookstore.jpg',
              originalHourlyPay: 14000,
            },
            href: '/api/shops/456',
          },
        },
        links: [],
      },
      {
        item: {
          id: '3',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '4',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '5',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '6',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '7',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '8',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '9',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '10',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '11',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '12',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '13',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '14',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '15',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '16',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '17',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '18',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
      {
        item: {
          id: '19',
          hourlyPay: 10000,
          startsAt: '2024-04-18T09:00:00Z',
          workhour: 8,
          description: '파트타임 직원 구함',
          closed: true,
          shop: {
            item: {
              id: '123',
              name: 'ABC 카페',
              category: '카페',
              address1: '서울 강남구 역삼동 123번지',
              address2: '',
              description: '커피와 빵을 파는 아늑한 카페',
              imageUrl: '/images/cat.jpg',
              originalHourlyPay: 12000,
            },
            href: '/api/shops/123',
          },
        },
        links: [],
      },
    ],
    links: [
      {
        rel: 'self',
        description: '현재 페이지',
        method: 'GET',
        href: '/api/0-1/the-julge/notices?offset=0&limit=10',
      },
      {
        rel: 'prev',
        description: '이전 페이지',
        method: 'GET',
        href: '/api/0-1/the-julge/notices?offset=0&limit=10',
      },
      {
        rel: 'next',
        description: '다음 페이지',
        method: 'GET',
        href: '/api/0-1/the-julge/notices?offset=10&limit=10',
      },
    ],
  };

  // 현우님이 유틸로 빼주실 함수
  const calcPage = (searchParams, List, offset) => {
    const isDefault = searchParams.page ? searchParams.page : '1';
    const pageLength = Math.ceil(List.items.length / offset);
    const sliceIndex = (parseInt(isDefault, 10) - 1) * offset;

    return [isDefault, pageLength, sliceIndex];
  };

  const [isDefault, pageLength, sliceIndex] = calcPage(searchParams, List, 6);

  return (
    <>
      <header>헤더 영역</header>
      <section className="bg-red-10">
        {/* sm:px-8 */}
        {/* <div className="md:px-3 py-[60px]  md:max-w-[964px] md:m-auto overflow-hidden "> */}
        <div className="py-[60px] md:max-w-[964px] md:m-auto  ">
          <h2 className="pl-3 sm:pl-8 text-[28px] font-bold">맞춤공고</h2>
          {/* flex justify-start gap-2 sm:gap-[14px] md:mid-w-[964px]/ */}
          <div className="max-w-[964px] overflow-x-scroll box">
            <ul className="flex gap-2 sm:gap-[14px]">
              {List.items.slice(0, 8).map(({ item }) => (
                <li className="flex-none first:pl-3 last:pr-3 sm:last:pr-8 sm:first:pl-8" key={item.id}>
                  <Post
                    href={item.shop.href}
                    address={item.shop.item.address1}
                    imageUrl={item.shop.item.imageUrl}
                    name={item.shop.item.name}
                    hourlyPay={item.hourlyPay}
                    originalHourlyPay={item.shop.item.originalHourlyPay}
                    startsAt={item.startsAt}
                    workhour={item.workhour}
                    closed={item.closed}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="px-3 py-[60px] sm:px-8 md:max-w-[964px] md:m-auto">
        <div className="flex justify-between">
          <h2 className="text-[28px] font-bold">전체 공고</h2>
          <div className="flex items-center">
            <div className="w-[105px] h-[30px]">
              <SelectInput />
            </div>
            <DetailFilterModal />
          </div>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-1 sm:gap-x-[14px] sm:gap-y-8">
          {List.items.slice(sliceIndex, sliceIndex + 6).map(({ item }) => (
            <li key={item.id}>
              <Post
                href={item.shop.href}
                address={item.shop.item.address1}
                imageUrl={item.shop.item.imageUrl}
                name={item.shop.item.name}
                hourlyPay={item.hourlyPay}
                originalHourlyPay={item.shop.item.originalHourlyPay}
                startsAt={item.startsAt}
                workhour={item.workhour}
                closed={item.closed}
              />
            </li>
          ))}
        </ul>
        <Pagination page={isDefault} pageLength={pageLength} />
        <div />
      </section>
    </>
  );
}
