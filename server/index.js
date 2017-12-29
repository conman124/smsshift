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

let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("pause", rl.close);

rl.on("line", (input) => {
  let destinationNumber = input.substr(0, input.indexOf(' '));
  let message = input.substr(input.indexOf(' ')+1);

  firebase.messaging().sendToDevice(config.phoneReg, {
    data: {
      type: "send",
      event: JSON.stringify({
        to: destinationNumber,
        message: message
      })
    }
  }).catch(console.error);
});
