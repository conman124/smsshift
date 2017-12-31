import {registerGCM, sendTextMessage} from './gcm.js';

chrome.gcm.onMessage.addListener(function(message) {
  console.log(message.data);
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
