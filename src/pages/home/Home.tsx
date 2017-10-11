import * as React from 'react';
import SignInButton from '../../modules/guard/SignInButton';
import './Home.css';

const logo = require('./logo.svg');

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to React Cognito Demo</h2>
        </div>
        <p className="Home-intro">
          <SignInButton />
        </p>
      </div>
    );
  }
}

export default Home;