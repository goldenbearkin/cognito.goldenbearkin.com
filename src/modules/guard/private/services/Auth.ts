import { CognitoAuth } from 'amazon-cognito-auth-js/dist/amazon-cognito-auth';
import * as jwtDecode from 'jwt-decode';

export type AuthConfigT = {
  ClientId: string;
  AppWebDomain: string;
  TokenScopesArray: string[];
  RedirectUriSignIn: string;
  RedirectUriSignOut: string
};

export class Auth {
  readonly clientId: string;
  readonly userId: string | null;

  private _cognitoAuth: CognitoAuth;

  constructor(authConfig: AuthConfigT) {
    this._cognitoAuth = new CognitoAuth(authConfig);
    this._cognitoAuth.userhandler = {
      onSuccess: result => { return; },
      onFailure: err => { return; }
    };

    this._cognitoAuth.parseCognitoWebResponse(window.location.href);
    
    this.clientId = authConfig.ClientId;
    this.userId = this._cognitoAuth.getCurrentUser();
  }

  get username(): string | null {
    const key = `CognitoIdentityServiceProvider.${this.clientId}.${this.userId}.idToken`;
    const idToken = this._cognitoAuth.storage[key];
    return idToken ? jwtDecode<{ name: string }>(idToken).name : null;

  }

  getSession() {
    this._cognitoAuth.getSession();
  }

  signOut() {
    this._cognitoAuth.signOut();
  }
}