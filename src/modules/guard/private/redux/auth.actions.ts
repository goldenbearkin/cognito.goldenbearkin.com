import { Action } from 'redux';
import { auth, UserT } from './auth.models';

export enum ActionTypes {
  REQUEST_AUTH = 'REQUEST_AUTH',
  REQUEST_SIGN_OUT = 'REQUEST_SIGN_OUT',
  AUTH_CALLBACK = 'AUTH_CALLBACK'
}

interface RequestAuthAction extends Action {
  readonly type: ActionTypes.REQUEST_AUTH;
}

interface RequestSignOutAction extends Action {
  readonly type: ActionTypes.REQUEST_SIGN_OUT;
}

interface AuthCallbackAction extends Action {
  readonly type: ActionTypes.AUTH_CALLBACK;
  user: UserT;
}

export const actionCreators = {
  requestAuth: () => {
    auth.getSession();
    return { type: ActionTypes.REQUEST_AUTH } as RequestAuthAction;
  },
  requestSignOut: () => {
    auth.signOut();
    return { type: ActionTypes.REQUEST_SIGN_OUT } as RequestSignOutAction;
  },
  authCallback: () => {
    const user: UserT = {
      id: auth.userId,
      username: auth.username
    };
    return { type: ActionTypes.AUTH_CALLBACK, user };
  }
};

export type ActionsT
  = RequestAuthAction
  | RequestSignOutAction
  | AuthCallbackAction;