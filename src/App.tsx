import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import GuardLandingRoute from './modules/guard/GuardLandingRoute';
import GuardRoute from './modules/guard/GuardRoute';
import GuardCallbackRoute from './modules/guard/GuardCallbackRoute';

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <GuardLandingRoute exact path="/" redirect="/dashboard" component={Home} />
          <GuardRoute exact path="/dashboard" component={Dashboard} />
          <GuardRoute exact path="/abc" component={Dashboard} />
          <GuardCallbackRoute exact path="/cognitocallback" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
