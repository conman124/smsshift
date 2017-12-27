let firebase = require('firebase-admin');
let config = require('../config.json');
let firebaseConfig = config.firebase;
let xmpp = require('node-xmpp-client');

/*firebase.initializeApp({
  credential: firebase.credential.cert(firebaseConfig)
});

firebase.messaging().*/

let client = new xmpp.Client({
  jid: config.senderID + "@gcm.googleapis.com",
  port: 5235,
  password: config.fcm_private_server_key,
  host: "fcm-xmpp.googleapis.com",
  legacySSL: true,
  reconnect: true
});

client.on('online', () => {
  console.log("Online!");
});

client.on('stanza', () => {
  console.log("Stanza!");
});

client.on('close', () => {
  console.log("Close!");
});
