import React, { FC } from 'react';
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
  useGoogleLogin,
} from 'react-google-login';
import config from '../../../config';
import { useMutation } from '@apollo/client';
import LOGIN from '../login';
import { RippleButton } from '../../../components/base/RippleButton';
import GoogleLoginButtonSkeleton from './GoogleLoginButtonSkeleton';

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
    return <GoogleLoginButtonSkeleton />;
  }

  if (loading) {
    return (
      <RippleButton size="lg" disabled>
        Logging in...
      </RippleButton>
    );
  }

  return (
    <RippleButton onClick={signIn} size="lg">
      Sign in using Google
    </RippleButton>
  );
};

export default GoogleLoginButton;
