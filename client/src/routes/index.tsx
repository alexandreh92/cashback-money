import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '~/components/PrivateRoute';
import GuestRoute from '~/components/GuestRoute';
import BackofficeRoute from '~/components/BackofficeRoute';

import Offers from '~/pages/App/Offers';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';

import BackofficeDashboard from '~/pages/Backoffice/Dashboard';
import BackofficeOffers from '~/pages/Backoffice/Offers';
import BackofficeOffersForm from '~/pages/Backoffice/Offers/Form';

const Routes: React.FC = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Offers} />

      <GuestRoute exact path="/sign_in" component={SignIn} />
      <GuestRoute exact path="/sign_up" component={SignUp} />

      <BackofficeRoute
        exact
        path="/backoffice"
        component={BackofficeDashboard}
      />
      <BackofficeRoute
        exact
        path="/backoffice/offers"
        component={BackofficeOffers}
      />
      <BackofficeRoute
        exact
        path="/backoffice/offers/new"
        component={BackofficeOffersForm}
      />
      <BackofficeRoute
        exact
        path="/backoffice/offers/edit/:id"
        component={BackofficeOffersForm}
      />
    </Switch>
  );
};

export default Routes;
