import { combineReducers } from 'redux';
import { guardReducer, GuardStateT } from '../modules/guard/reduxConnect';

export type RootStateT = {
  guard: GuardStateT
};

export const appReducer = combineReducers<RootStateT>({
  guard: guardReducer
});