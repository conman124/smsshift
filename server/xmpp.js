let xmpp = require('node-xmpp-client');
let config = require('../config.json');

module.exports = function(callback) {
  let client = new xmpp.Client({
    jid: config.senderID + "@gcm.googleapis.com",
    port: 5235,
    password: config.fcm_private_server_key,
    host: "fcm-xmpp.googleapis.com",
    legacySSL: true,
    reconnect: true
  });

  client.on('online', () => {
    console.log("XMPP connection online!");
  });

  client.on('stanza', function(stanza) {
    if(stanza.is("message") && stanza.attrs.type === "normal") {
      // ACK
      let json = stanza.children[0].children[0];
      let payload = JSON.parse(json);

      let to = payload.from;
      let mid = payload.message_id;

      let ack = JSON.stringify({
        message_id: mid,
        to: to,
        message_type: "ack"
      });

      client.send(new xmpp.Element('message').c('gcm', {xmlns: "google:mobile:data"}).t(ack));

      callback(payload);
    }
  });

  client.on('close', () => {
    console.log("XMPP connection closed.");
  });
};
