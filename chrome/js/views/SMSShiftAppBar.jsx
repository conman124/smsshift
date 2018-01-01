import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

function SMSShiftAppBar(props) {
  return (
    <AppBar
      position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            SMSShift
          </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default SMSShiftAppBar;
