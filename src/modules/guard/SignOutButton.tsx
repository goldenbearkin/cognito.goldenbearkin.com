import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { actionCreators } from './private/redux/auth.actions';
import Button from 'material-ui/Button';

type DispatchToPropsT = {
  requestLogout: () => void;
};

type PropsT = DispatchToPropsT;

class SignOutButton extends React.PureComponent<PropsT> {
  render() {
    return (
      <div>
        <Button raised color="primary" onClick={this.handleClick}>Logout</Button>
      </div>
    );
  }

  handleClick = () => {
    this.props.requestLogout();
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestLogout: () => dispatch(actionCreators.requestSignOut())
});

export default connect<null, DispatchToPropsT, void>(null, mapDispatchToProps)(SignOutButton);