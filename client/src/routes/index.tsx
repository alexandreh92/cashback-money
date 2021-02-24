import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from '~/components/PrivateRoute';
import GuestRoute from '~/components/GuestRoute';
import BackofficeRoute from '~/components/BackofficeRoute';

import appRoutes from './App';
import authRoutes from './Auth';
import backofficeRoutes from './Backoffice';

const Routes: React.FC = () => {
  return (
    <Switch>
      {appRoutes.map((appRoute, idx) => (
        <PrivateRoute key={`app_${idx}`} {...appRoute} />
      ))}
      {authRoutes.map((authRoute, idx) => (
        <GuestRoute key={`auth_${idx}`} {...authRoute} />
      ))}
      {backofficeRoutes.map((authRoute, idx) => (
        <BackofficeRoute key={`auth_${idx}`} {...authRoute} />
      ))}
    </Switch>
  );
};

export default Routes;
