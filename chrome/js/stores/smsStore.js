import {ReduceStore} from "flux/utils";
import {OrderedMap, List} from "immutable";
import dispatcher from "dispatcher";
import actions from "actionTypes";

class SMSStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return new OrderedMap();
  }

  reduce(state, action) {
    switch(action.type) {
      case actions.received:
        return appendToListAndBump(state, action.senderNumber, action.message);
      default:
        return state;
    }
  }

  getSenders() {
    return getState().keySeq();
  }

  getMessagesInvolving(number) {
    return getState().get(number);
  }
}

function appendToListAndBump(map, key, el) {
  return map.withMutations((map) => {
    let list = map.get(key, new List()).push(el);
    return map.remove(key).set(key, list);
  });
}

export default new SMSStore();
