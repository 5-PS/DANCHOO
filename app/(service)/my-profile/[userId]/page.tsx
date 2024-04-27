import ProfileContainer from './_components/profileContainer';

function MyProfile({
  params,
  searchParams,
}: {
  params: { userId: string | string[] };
  searchParams: any;
}) {
  return <ProfileContainer userId={params.userId} page={searchParams.page ? searchParams.page : 1} />;
}
export default MyProfile;
