import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import UserChip from '../../modules/guard/UserChip';
import SignOutButton from '../../modules/guard/SignOutButton';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography type="title" color="inherit" style={{ flex: 1 }}>Dashboard</Typography>
            <UserChip />
            <SignOutButton />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Dashboard;