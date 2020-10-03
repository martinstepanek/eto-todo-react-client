import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ME from './me';
import { useQuery } from '@apollo/client';

const PrivateRoute: FC = ({ children, ...props }) => {
  const { loading, data } = useQuery(ME);
  if (loading) {
    return <>Loading</>;
  }

  const isAuthenticated = Boolean(data && data.me);
  return (
    <Route
      {...props}
      render={({ location: locationObject }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: {
                fromUrl: locationObject.pathname,
              },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
