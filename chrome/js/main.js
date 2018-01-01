import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'AppContainer';
import dispatcher from 'dispatcher';

let mainElement = document.createElement('main');
mainElement.id = "main";
document.body.appendChild(mainElement)

ReactDOM.render(
  React.createElement(AppContainer, null),
  document.getElementById("main")
);

chrome.runtime.onMessage.addListener((message) => {
  dispatcher.dispatch(message);
});
