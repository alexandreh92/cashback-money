import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

const authRoutes = [
  {
    component: SignIn,
    path: '/sign_in',
    exact: true,
  },
  {
    component: SignUp,
    path: '/sign_up',
    exact: true,
  },
];

export default authRoutes;
