import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { ApplicationState } from '~/@types';

import LegacyLayout from '~/layouts/Legacy';

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
        !signedIn ? (
          <LegacyLayout>
            <Component {...props} />
          </LegacyLayout>
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
