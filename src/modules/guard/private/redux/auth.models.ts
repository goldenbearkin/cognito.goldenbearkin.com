import { Auth, AuthConfigT } from '../services/Auth';

export type UserT = {
  id: string | null;
  username: string | null;
};

const authConfig: AuthConfigT = {
  ClientId: '6eap7f5nn89oso50nved9702rn',
  AppWebDomain: 'react-demo.auth.ap-northeast-1.amazoncognito.com',
  TokenScopesArray: ['email openid profile'],
  RedirectUriSignIn: 'https://localhost:3000/cognitocallback',
  RedirectUriSignOut: 'https://localhost:3000'
};

export const auth = new Auth(authConfig);