import Dashboard from '~/pages/Backoffice/Dashboard';
import Offers from '~/pages/Backoffice/Offers';

const backofficeRoutes = [
  {
    component: Offers,
    path: '/backoffice/offers',
    exact: true,
  },
  {
    component: Dashboard,
    path: '/backoffice',
    exact: true,
  },
];

export default backofficeRoutes;
