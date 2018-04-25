import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import Login from "./components/Login"
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Login}/>
      <Route path="/home" component={Home} />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
