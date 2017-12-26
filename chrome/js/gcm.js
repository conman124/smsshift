const sender = "395460313717";

function onGCMRegistered(registrationID) {
  if(!registrationID) {
    console.error(chrome.runtime.lastError.message);
    return;
  }

  chrome.storage.local.set({registrationID});
}

function registerGCM() {
  chrome.gcm.register([sender], onGCMRegistered);
}

export {registerGCM};
