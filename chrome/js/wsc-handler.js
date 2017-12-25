import {BaseHandler} from "./wsc-chrome.min.js";

const methods = ["get", "post", "delete", "put"];

function WSCHandler(routes) {
  this.routes = routes;

  BaseHandler.prototype.constructor.call(this);
}

Object.assign(WSCHandler.prototype, BaseHandler.prototype);

function findMatchingCallback(routeArr, string) {
  for(let i = 0; i < routeArr; i++) {
    let regex = new RegExp(routeArr[i].route);
    if(regex.exec()) {
      return routeArr[i].callback;
    }
  }
}

for(let i = 0; i < methods.length; i++) {
  WSCHandler.prototype[methods[i]] = function() {
    let callback = findMatchingCallback(this.routes[methods[i]], this.request.uri);
    if(!callback) {
      this.write("Route not found.", 404);
      return;
    }

    callback(this.request)
      .then((response) => {
        for(const header in response.headers) {
          if(response.headers.hasOwnProperty(header)) {
            this.setHeader(header, response.headers[header]);
          }
        }
        this.write(response.body, response.code);
      })
      .catch(() => { this.write("Server error", 500); })
  }
}

export default WSCHandler;
