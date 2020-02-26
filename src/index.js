import React from "react";
import { render } from "react-dom";
import { connect, Provider } from "react-redux";
import store from "./redux/redux-store";
import "./component/base.scss";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(".SITE_CONTAINER")
);
