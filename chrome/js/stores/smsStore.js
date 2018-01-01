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
}

function appendToListAndBump(map, action) {
  return map.withMutations((map) => {
    let list = map.get(action.senderNumber, new List()).push(action);
    return map.remove(action.senderNumber).set(action.senderNumber, list);
  });
}

export default new SMSStore();
