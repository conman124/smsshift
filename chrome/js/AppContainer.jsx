import React from 'react';
import App from 'views/App';
import {Container} from 'flux/utils';
import smsStore from 'stores/smsStore';
import currentConversationStore from 'stores/currentConversationStore';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [ smsStore, currentConversationStore ];
  }

  static calculateState() {
    return {
      sms: smsStore.getState(),
      currentConversation: currentConversationStore.getState()
    };
  }

  render() {
    return <App {...this.state} />;
  }
}

export default Container.create(AppContainer);
