import React from "react";
import InfoScreen from "./screens/InfoScreen";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./screens/Login";
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        {/* <Route path="/playlist/:id" component={InfoScreen} exact /> */}
        <Route path="/login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
