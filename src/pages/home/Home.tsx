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
          <h2>Welcome to React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <SignInButton />
      </div>
    );
  }
}

export default Home;