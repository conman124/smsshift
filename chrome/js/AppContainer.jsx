import React from 'react';
import App from 'views/App';
import {Container} from 'flux/utils';
import smsStore from 'stores/smsStore';
import currentConversationStore from 'stores/currentConversationStore';

function getStores() {
  return [ smsStore, currentConversationStore ];
}

function calculateState() {
  return {
    sms: smsStore.getState(),
    currentConversation: currentConversationStore.getState()
  };
}

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return getStores()
  }

  static calculateState() {
    return calculateState()
  }

  render() {
    return <App {...this.state} />;
  }
}

export default Container.create(AppContainer);
