import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

import CallbackPage from './private/CallbackPage';

type PropsT = RouteProps;

class GuardCallbackRoute extends React.PureComponent<PropsT> {
  render() {
    return <Route component={CallbackPage} />;
  }
}

export default GuardCallbackRoute;