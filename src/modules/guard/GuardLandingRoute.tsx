import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { AuthStateT } from './private/redux/auth.reducers';
import { RootStateT } from './reduxConnect';

type OwnPropsT = {
  redirect: string,
};

type StateToPropsT = {
  authState: AuthStateT
};

type PropsT = StateToPropsT & RouteProps & OwnPropsT;

class GuardLandingRoute extends React.PureComponent<PropsT> {
  render() {
    const userId = this.props.authState.user.id;
    if (userId) {
      return <Redirect to={this.props.redirect} />;
    } else {
      return <Route component={this.props.component} />;
    }
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  authState: appState.guard.auth,
});

export default connect<StateToPropsT, {}, OwnPropsT>(mapStateToProps, {})(GuardLandingRoute);