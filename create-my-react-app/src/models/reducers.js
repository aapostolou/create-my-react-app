import { combineReducers } from "redux";

import languageReducer from "./Language/reducers";

const rootReducer = combineReducers({ language: languageReducer });

export default rootReducer;
