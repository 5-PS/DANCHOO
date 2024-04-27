import ProfileContainer from './_components/profileContainer';

function MyProfile({ params, searchParams }: { params: { userId: string | string[] } }) {
  return <ProfileContainer userId={params.userId} page={searchParams.page ? searchParams.page : 1} />;
}
export default MyProfile;
