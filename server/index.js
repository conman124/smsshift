let xmpp = require('./xmpp');
let config = require('../config.json');
let firebaseConfig = config.firebase;
let firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
})

xmpp((message) => {
  switch(message.data.type) {
    case "received":
      getRegistrationIDsToForwardTo(message.from)
        .then((ids) =>
          firebase.messaging().sendToDevice(ids, {
            data: {
              type: "received",
              event: message.data.event
            }
          })
        )
        .catch(console.error);
      break;
    case "send":
      getPhoneRegistrationID(message.from)
        .then((phoneID) =>
          firebase.messaging().sendToDevice(phoneID, {
            data: {
              type: "send",
              event: message.data.event
            }
          })
        )
        .catch(console.error);
      break;
    default:
      console.error("Received unexpected event type:", message.data.type);
  }
});

function getRegistrationIDsToForwardTo(from) {
  if(from != config.phoneReg) {
    return Promise.reject("Invalid from!");
  }
  return Promise.resolve(config.otherReg);
}

function getPhoneRegistrationID(otherID) {
  if(config.otherReg.indexOf(otherID) == -1) {
    return Promise.reject("Invalid otherID!");
  }
  return Promise.resolve(config.phoneReg);
}
