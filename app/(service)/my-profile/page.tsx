// 'use client';

import ProfileCard from './_components/profileCard';

// import Footer from '@/components/footer/footer';
// import useUser from '@/hooks/useUser';

// import Empty from './_components/empty';
// import ProfileCard from './_components/profileCard';

function MyProfile() {
  // const user = useUser();
  // console.log(!!user?.name);
  // if (user) {
  //   if (user?.name) {
  //     return (
  //       <>
  //         <section>
  //           <ProfileCard name={user.name} phone={user.phone} address={user.address} bio={user.bio} />
  //         </section>
  //         <section>신청자 목록</section>
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <section className=" bg-red-10">
  //         <Empty title="내 프로필" desc="아직 신청 내역이 없어요." btnText="공고 보러가기" />
  //       </section>
  //       <Footer />
  //     </>
  //   );
  // }

  return <ProfileCard />;
}
export default MyProfile;
