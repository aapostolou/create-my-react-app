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

const App = () => (
    <Provider store={store}>
        <div>App</div>
    </Provider>
);

export default App;
