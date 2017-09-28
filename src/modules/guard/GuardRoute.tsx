import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Route, RouteProps } from 'react-router-dom';
import { actionCreators } from './private/redux/auth.actions';
import { AuthStateT } from './private/redux/auth.reducers';
import { RootStateT } from './reduxConnect';

// import RedirectPage from './private/RedirectPage';

type StateToPropsT = {
  authState: AuthStateT
};

type DispatchToPropsT = {
  requestAuth: () => void;
};

type PropsT = StateToPropsT & DispatchToPropsT & RouteProps;

class GuardRoute extends React.PureComponent<PropsT> {
  render() {
    const currentUserId = this.props.authState.user.id;
    if (currentUserId) {
      return <Route component={this.props.component} />;
    } else {
      localStorage.setItem('redirectTo', this.props.location!.pathname);
      this.props.requestAuth();
      return null;
      // return <Route component={RedirectPage} />;
    }
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  authState: appState.guard.auth,
});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestAuth: () => dispatch(actionCreators.requestAuth())
});

export default connect<StateToPropsT, DispatchToPropsT, void>(mapStateToProps, mapDispatchToProps)(GuardRoute);