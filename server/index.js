let firebase = require('firebase-admin');
let config = require('../config');
let firebaseConfig = require('../firebase.json');

firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
});

let registrationID = process.argv[2];
let message = process.argv[3];

firebase.messaging().sendToDevice(registrationID, {
  data: {
    message
  }
}).then((response) => {
  console.log("Successfully sent message:", response);
  firebase.apps[0].delete();
}).catch((error) => {
  console.error("Error sending:", error);
});
