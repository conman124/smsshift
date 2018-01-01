import {registerGCM, sendTextMessage} from './gcm.js';

chrome.gcm.onMessage.addListener(function(message) {
  var event = JSON.parse(message.data.event);
  chrome.runtime.sendMessage(Object.assign({type: message.data.type}, event));
});

chrome.app.runtime.onLaunched.addListener(() => {
  chrome.app.window.create('html/main.html', {
    outerBounds: {
      width: 640,
      height: 480
    }
  })
})

registerGCM();

window.sendTextMessage = sendTextMessage;
