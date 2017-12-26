import {registerGCM,sendGCM} from './gcm.js';

chrome.gcm.onMessage.addListener(function(message) {
  console.log(message.data);
});

registerGCM();
