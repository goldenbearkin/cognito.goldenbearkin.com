import { combineReducers } from 'redux';
import { authReducer, AuthStateT } from './private/redux/auth.reducers';

export type GuardStateT = {
  auth: AuthStateT,
};

export const guardReducer = combineReducers({
  auth: authReducer,
});

export { RootStateT } from '../../rootRedux/root.reducers';