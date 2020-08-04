import { combineReducers } from "redux";

import { CHANGE_LANGUAGE, RESET } from "./actions";

//? Language Reducer
export const availableLanguages = ["EN", "GR"];

const languageReducer = (state = availableLanguages[0], action) => {
    switch (action.type) {
        case RESET:
            return availableLanguages[0];
        case CHANGE_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({ language: languageReducer });

export default rootReducer;
