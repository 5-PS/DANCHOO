import Gnb from '@/components/gnb/gnb';

export default {
  title: 'components/Gnb',
  component: Gnb,
};

function Template({ isAuthenticated, userType }: { isAuthenticated: boolean; userType: string }) {
  return <Gnb isAuthenticated={isAuthenticated} userType={userType} />;
}
// FIXME args에서 타입오류가 나요 몇시간동안 했는데 해결 못 했어요 나중에 수정해볼게요..
export const AuthenticatedEmployer = Template.bind({});
AuthenticatedEmployer.args = {
  isAuthenticated: true,
  userType: 'employer',
};

export const AuthenticatedEmployee = Template.bind({});
AuthenticatedEmployee.args = {
  isAuthenticated: true,
  userType: 'employee',
};

export const UnAuthenticated = Template.bind({});
UnAuthenticated.args = {
  isAuthenticated: false,
};
