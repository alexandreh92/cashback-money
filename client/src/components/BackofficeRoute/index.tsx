import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { ApplicationState } from '~/@types';

import Backoffice from '~/layouts/Backoffice';
import Default from '~/layouts/Default';

interface Props extends RouteProps {
  component: React.ComponentType<any>;
  isPrivate?: boolean;
  isGuest?: boolean;
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  children,
  ...rest
}) => {
  const { signedIn } = useSelector((state: ApplicationState) => state.auth);
  const { roles } = useSelector((state: ApplicationState) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        signedIn && roles.some((r) => r.name === 'admin') ? (
          <Default noBodyPadding>
            <Backoffice>
              <Component {...props} />
            </Backoffice>
          </Default>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default RouteWrapper;
