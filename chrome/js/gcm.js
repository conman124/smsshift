const senderPromise = Promise.resolve().then(() => require('../../config-public.json')).then(config => config.senderID)

function onGCMRegistered(registrationID) {
  if(!registrationID) {
    console.error(chrome.runtime.lastError.message);
    return;
  }

  chrome.storage.local.set({registrationID});
}

function registerGCM() {
  senderPromise.then((sender) => {
    chrome.gcm.register([sender], onGCMRegistered);
  });
}

function sendGcmPromise(msg) {
  return new Promise((resolve, reject) => {
    chrome.gcm.send(msg, (id) => {
      if(chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      return resolve(id);
    })
  })
}

function sendTextMessage(to, message) {
  return senderPromise.then((sender) =>
    sendGcmPromise({
      destinationId: sender + "@gcm.googleapis.com",
      messageId: to + "_" + Date.now(),
      timeToLive: 0,
      data: {
        type: "send",
        event: JSON.stringify({
          to, message
        })
      }
    })
  )
}

export {registerGCM, sendTextMessage};
