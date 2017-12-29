let xmpp = require('./xmpp');
let config = require('../config.json');
let firebaseConfig = config.firebase;
let firebase = require('firebase-admin');

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
})

xmpp((message) => {
  console.log(JSON.stringify(message));

  getRegistrationIDsToForwardTo(message.from)
    .then((ids) => {
      console.log("Send to", ids);
    });
});

function getRegistrationIDsToForwardTo(from) {
  if(from != config.phoneReg) {
    return Promise.reject("Invalid from!");
  }
  return Promise.resolve(config.otherReg);
}
