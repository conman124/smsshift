import App from 'views/App';
import {Container} from 'flux/utils';
import smsStore from 'stores/smsStore';
import currentConversationStore from 'stores/currentConversationStore';

function getStores() {
  return [ smsStore, currentConversationStore ];
}

function getState() {
  return {
    sms: smsStore.getState(),
    currentConversation: currentConversationStore.getState()
  }
}

export default Container.createFunctional(App, getStores, getState);
