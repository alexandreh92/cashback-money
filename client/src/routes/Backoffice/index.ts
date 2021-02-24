import Dashboard from '~/pages/Backoffice/Dashboard';
import Offers from '~/pages/Backoffice/Offers';
import OffersForm from '~/pages/Backoffice/Offers/Form';

const backofficeRoutes = [
  {
    component: Offers,
    path: '/backoffice/offers',
    exact: true,
  },
  {
    component: OffersForm,
    path: '/backoffice/offers/edit/:id',
    exact: true,
  },
  {
    component: OffersForm,
    path: '/backoffice/offers/new',
    exact: true,
  },
  {
    component: Dashboard,
    path: '/backoffice',
    exact: true,
  },
];

export default backofficeRoutes;
