import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { actionCreators } from './redux/auth.actions';

type DispatchToPropsT = {
  authCallback: () => void;
};

type PropsT = DispatchToPropsT & RouteComponentProps<{}>;

// type PropsT = RouteComponentProps<{}>;

class CallbackPage extends React.PureComponent<PropsT> {
  componentWillMount() {
    this.props.authCallback();
    const redirectTo = localStorage.getItem('redirectTo');

    if (redirectTo) {
      this.props.history.push(redirectTo);
      localStorage.removeItem('redirectTo');
    } else {
      this.props.history.push('/');
    }
  }

  render() {

    return <h1>Loading, please wait...</h1>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  authCallback: () => dispatch(actionCreators.authCallback())
});

export default withRouter(connect<null, DispatchToPropsT, void>(null, mapDispatchToProps)(CallbackPage));