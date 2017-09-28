import * as React from 'react';
import Chip from 'material-ui/Chip';

import { connect } from 'react-redux';
import { AuthStateT } from './private/redux/auth.reducers';
import { RootStateT } from './reduxConnect';

type StateToPropsT = {
  authState: AuthStateT
};

type PropsT = StateToPropsT;

class UserChip extends React.PureComponent<PropsT> {
  render() {
    return <Chip style={{ margin: 10 }} label={this.props.authState.user.username} />;
  }
}

const mapStateToProps = (appState: RootStateT) => ({
  authState: appState.guard.auth,
});

export default connect(mapStateToProps)(UserChip);