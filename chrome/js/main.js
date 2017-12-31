import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let mainElement = document.createElement('main');
mainElement.id = "main";
document.body.appendChild(mainElement)

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("main")
);
