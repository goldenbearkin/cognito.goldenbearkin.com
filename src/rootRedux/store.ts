import { createStore, compose } from 'redux';
import { appReducer } from './root.reducers';

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const store = createStore(
  appReducer,
  {}, // initialState,
  composeEnhancers(),
);