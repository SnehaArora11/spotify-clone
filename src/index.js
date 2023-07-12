import React from "react";
import ReactDOM from "react-dom";
import { DataLayer } from "./DataLayer";
import "./index.css";
import reducer, { initialState } from "./reducer";

import reportWebVitals from "./reportWebVitals";
import Router from "./Router";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <Router />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
