import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'AppContainer';

let mainElement = document.createElement('main');
mainElement.id = "main";
document.body.appendChild(mainElement)

ReactDOM.render(
  React.createElement(AppContainer, null),
  document.getElementById("main")
);
