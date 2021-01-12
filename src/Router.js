import React from "react";
import InfoScreen from "./screens/InfoScreen";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "./App";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/playlist" component={InfoScreen} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
