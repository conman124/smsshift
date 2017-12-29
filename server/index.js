let xmpp = require('./xmpp');
let config = require('../config.json');
let firebaseConfig = config.firebase;
let firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
})

xmpp((message) => {
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
});

function getRegistrationIDsToForwardTo(from) {
  if(from != config.phoneReg) {
    return Promise.reject("Invalid from!");
  }
  return Promise.resolve(config.otherReg);
}
