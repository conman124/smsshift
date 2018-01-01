import React from "react";
import DualPane from "views/DualPane"
import CSSReset from "material-ui/Reboot";
import injectSheet from 'react-jss';
import proptypes from 'prop-types';

const globalStyles = {
  '@global': {
    "html,body,main": {
      height: "100%"
    }
  }
}

function App(props) {
  return (
    <CSSReset>
      <DualPane
        left={<div style={{backgroundColor:"yellow",height:"100%"}}>YAY!</div>}
        right={<div style={{backgroundColor:"orange",height:"100%"}}>AWW YEAH!</div>}
      />
    </CSSReset>
  )
}

App.propTypes = {
  classes: proptypes.object.isRequired
}

export default injectSheet(globalStyles)(App);
