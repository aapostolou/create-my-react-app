import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./models/reducers";
import rootEpic from "./models/epics";

import "./App.css";

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

const Redux = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Redux;
