import React from 'react';
import SMSShiftAppBar from 'views/SMSShiftAppBar';
import proptypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  flex: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  appbar: {
    flex: "0 0",
    zIndex: 1100
  },
  app: {
    flex: "1"
  }
}

function AppBarOrchestrator(props) {
  React.Children.only(props.children);

  return (
    <div className={props.classes.flex}>
      <div className={props.classes.appbar}>
        <SMSShiftAppBar/>
      </div>
      <div className={props.classes.app}>
        {props.children}
      </div>
    </div>
  )
}

AppBarOrchestrator.propTypes = {
  classes: proptypes.object.isRequired
}

export default injectSheet(styles)(AppBarOrchestrator);
