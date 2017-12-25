const methods = ["post", "get", "put", "delete"];

function Routes(routes) {
  this.routes = routes;
}

function RouteBuilder() {
  this._routes = { };
  for(let i = 0; i < methods.length; i++) {
    this._routes[methods[i]] = [];
  }
}

for(let i = 0; i < methods.length; i++) {
  RouteBuilder.prototype[methods[i]] = function(route, callback) {
    this._routes[methods[i]].push({route, callback});
    return this;
  }
}

RouteBuilder.prototype.build = function() {
  return new Routes(this._routes);
}

export default RouteBuilder;
