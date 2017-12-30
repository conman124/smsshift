import {registerGCM, sendTextMessage} from './gcm.js';

chrome.gcm.onMessage.addListener(function(message) {
  console.log(message.data);
});

registerGCM();

window.sendTextMessage = sendTextMessage;
