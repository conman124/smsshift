import {registerGCM, sendTextMessage} from './gcm.js';

chrome.gcm.onMessage.addListener(function(message) {
  var data = JSON.parse(message.data.event);
  chrome.runtime.sendMessage({
    type: "received",
    senderNumber: data.senderNumber,
    message: data.message
  });
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
