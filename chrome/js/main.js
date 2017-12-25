import WSC from "./wsc-chrome.min.js";
import RouteBuilder from "./router.js";
import WSCHandler from "./wsc-handler.js";

let routes = new RouteBuilder()
  .get("/test", () =>
    {
      return Promise.resolve({code: 200, body: "Worky?"});
    }
  ).build();

function Handler(request) {
  WSCHandler.prototype.constructor.call(this, routes.routes, request);
}

Object.assign(Handler.prototype, WSCHandler.prototype);

let app = new WSC.WebApplication({
  handlers: [[".*", Handler]]
});

app.start(() => { console.log("started!"); });
