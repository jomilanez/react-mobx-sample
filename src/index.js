import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import { Provider } from "mobx-react";
import CurrencyStore from "./CurrencyStore";

const stores = { CurrencyStore };

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
