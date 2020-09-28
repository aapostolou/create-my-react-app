import { CHANGE_LANGUAGE } from "./actions";
import { RESET } from "../General/actions";

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

export default languageReducer;
