import React, { FC } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import config from '../../config';
import { useMutation } from '@apollo/client';
import LOGIN from './login';

interface GoogleLoginButtonProps {
  onLogin: (accessToken: string) => void;
}

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({ onLogin }) => {
  const [login, { loading }] = useMutation(LOGIN);

  const onSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ('tokenId' in response) {
      const { data } = await login({
        variables: { tokenId: response.tokenId },
      });
      onLogin(data.login.accessToken);
    }
  };
  const onFailure = (response: any) => {
    console.log('FAILURE', response);
  };

  const { signIn, loaded } = useGoogleLogin({
    clientId: config.googleClientId,
    onSuccess,
    onFailure,
  });

  if (!loaded) {
    return <>Loading</>;
  }

  if (loading) {
    return <>Logging in</>;
  }

  return <button onClick={signIn}>Sign in using Google</button>;
};

export default GoogleLoginButton;
