import { map } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import { CHANGE_LANGUAGE, HANDLE_CHANGE_LANGUAGE } from "./actions";
import { NO_ACTION } from "../General/actions";

import { availableLanguages } from "./reducers";

//? Language
const handleChangeLanguageEpic = (action$) =>
  action$.pipe(
    ofType(HANDLE_CHANGE_LANGUAGE),
    map((action) => {
      const { payload } = action;

      if (availableLanguages.contains(payload)) {
        return {
          type: CHANGE_LANGUAGE,
          payload,
        };
      }
      return {
        type: NO_ACTION,
      };
    })
  );

const languageEpics = combineEpics(handleChangeLanguageEpic);

export default languageEpics;
