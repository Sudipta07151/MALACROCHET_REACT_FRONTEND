import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  // applyMiddleware(thunk),
  composeEnhancers(applyMiddleware(thunk))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
