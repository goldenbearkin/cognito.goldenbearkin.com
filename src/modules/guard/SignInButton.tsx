import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { actionCreators } from './private/redux/auth.actions';
import Button from 'material-ui/Button';

type DispatchToPropsT = {
  requestAuth: () => void;
};

type PropsT = DispatchToPropsT;

class SignInButton extends React.PureComponent<PropsT> {
  render() {
    return <Button raised color="primary" onClick={this.handleClick}>GET STARTED</Button>;
  }

  handleClick = () => {
    this.props.requestAuth();
  }
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  requestAuth: () => dispatch(actionCreators.requestAuth())
});

export default connect<null, DispatchToPropsT, void>(null, mapDispatchToProps)(SignInButton);