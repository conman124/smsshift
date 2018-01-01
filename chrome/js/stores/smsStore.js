import {ReduceStore} from "flux/utils";
import {OrderedMap, List} from "immutable";
import dispatcher from "dispatcher";
import actions from "actionTypes";
import SMS from "records/SMS"

class SMSStore extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return new OrderedMap();
  }

  reduce(map, action) {
    switch(action.type) {
      case actions.received:
        let record = new SMS(action);
        return appendToListAndBump(map, action);
      default:
        return map;
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
