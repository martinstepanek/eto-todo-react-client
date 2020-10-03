import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Redirect, useHistory } from 'react-router';
import ME from '../me';
import GoogleLoginButton from './GoogleLoginButton';

const SignIn: FC = () => {
  const history = useHistory();
  const meQuery = useQuery(ME);
  const isAuthenticated = Boolean(meQuery.data && meQuery.data.me);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const login = (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    history.push('/');
  };

  return <GoogleLoginButton onLogin={login} />;
};

export default SignIn;
