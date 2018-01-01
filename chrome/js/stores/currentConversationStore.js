import {ReduceStore} from "flux/utils";
import dispatcher from "dispatcher";
import smsStore from 'stores/smsStore';
import actions from "actionTypes";

class CurrentConversationStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return smsStore.getState().keySeq().first();
  }

  reduce(currentConversation, action) {
    switch(action.type) {
      case actions.CHANGE_CONVERSATION:
        return action.newConversation;
      default:
        return currentConversation;
    }
  }
}

export default new CurrentConversationStore();
