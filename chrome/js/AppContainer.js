import App from 'views/App';
import {Container} from 'flux/utils';
import smsStore from 'stores/smsStore';

function getStores() {
  return [ smsStore ];
}

function getState() {
  return {
    sms: smsStore.getState()
  }
}

export default Container.createFunctional(App, getStores, getState);
