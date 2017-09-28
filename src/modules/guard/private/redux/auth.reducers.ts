import { auth, UserT } from './auth.models';
import { ActionsT, ActionTypes } from './auth.actions';

export type AuthStateT = {
  user: UserT
};

const init: AuthStateT = { 
  user: { 
    id: auth.userId, 
    username : auth.username
  } 
};

export function authReducer(state: AuthStateT = init, action: ActionsT): AuthStateT {
  switch (action.type) {
    case ActionTypes.AUTH_CALLBACK:
      return { user: action.user };
    default:
      return state;
  }
}