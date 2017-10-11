import { Auth, AuthConfigT } from '../services/Auth';

export type UserT = {
  id: string | null;
  username: string | null;
};

const origin = process.env.NODE_ENV === 'production' ? 'cognito.goldenbearkin.com' : 'localhost:3000';

const authConfig: AuthConfigT = {
  ClientId: '30su4gcl2q19kkuuase1nb93di',
  AppWebDomain: 'goldenbearkin.auth.ap-northeast-1.amazoncognito.com',
  TokenScopesArray: ['email openid profile'],
  RedirectUriSignIn: `https://${origin}/cognitocallback`,
  RedirectUriSignOut: `https://${origin}`
};

export const auth = new Auth(authConfig);