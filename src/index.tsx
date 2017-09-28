import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { store } from './rootRedux/store';

const RootRender = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <RootRender />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
