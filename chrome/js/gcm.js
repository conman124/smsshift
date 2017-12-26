function onGCMRegistered(registrationID) {
  if(!registrationID) {
    console.error(chrome.runtime.lastError.message);
    return;
  }

  chrome.storage.local.set({registrationID});
}

function registerGCM() {
  let sender = [chrome.runtime.getManifest().senderID];

  chrome.gcm.register(sender, onGCMRegistered);
}

export default registerGCM;