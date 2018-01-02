import React from "react";
import DualPane from "views/DualPane"
import CSSReset from "material-ui/Reboot";
import injectSheet from 'react-jss';
import proptypes from 'prop-types';
import AppBarOrchestrator from 'views/AppBarOrchestrator';
import ConversationList from 'views/ConversationList';

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
      <AppBarOrchestrator>
        <DualPane
          left={<ConversationList {...props} />}
          right={<div style={{backgroundColor:"orange",height:"100%"}}>AWW YEAH!</div>}
        />
      </AppBarOrchestrator>
    </CSSReset>
  )
}

App.propTypes = {
  classes: proptypes.object.isRequired
}

export default injectSheet(globalStyles)(App);
