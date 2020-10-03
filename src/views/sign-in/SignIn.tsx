import React, { FC, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { Redirect, useHistory } from 'react-router';
import ME from '../me';
import GoogleLoginButton from './google-login-button/GoogleLoginButton';
import ReactTypingEffect from 'react-typing-effect';
import shuffle from 'lodash/shuffle';
import SignInLayout from './SignInLayout';

const SignIn: FC = props => {
  const history = useHistory();
  const meQuery = useQuery(ME);
  const isAuthenticated = Boolean(meQuery.data && meQuery.data.me);

  const typedText = useMemo(
    () =>
      shuffle([
        'Call the manager',
        'Do something for myself',
        'Do the dishes',
        'Prepare presentation',
        'Go to gym',
      ]),
    []
  );

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  const login = (accessToken: string) => {
    localStorage.setItem('token', accessToken);
    history.push('/');
  };

  return (
    <SignInLayout
      typedText={
        <ReactTypingEffect
          speed={40}
          typingDelay={300}
          eraseDelay={1500}
          text={typedText}
        />
      }
      googleButton={<GoogleLoginButton onLogin={login} />}
    />
  );
};

export default SignIn;
