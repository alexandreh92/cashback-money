import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { ApplicationState } from '~/@types';
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

  return (
    <Route
      {...rest}
      render={(props) =>
        signedIn ? (
          <Default>
            <Component {...props} />
          </Default>
        ) : (
          <Redirect
            to={{
              pathname: '/sign_in',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default RouteWrapper;
