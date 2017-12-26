const senderPromise = fetch("../config.json")
  .then(resp => resp.json())
  .then(json => json.senderID);

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

export {registerGCM};
