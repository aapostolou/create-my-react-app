import { map, debounceTime } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import { CHANGE_LANGUAGE, HANDLE_CHANGE_LANGUAGE } from "./actions";

import { availableLanguages } from "./reducers";

//? GENERAL
const handleResetEpic = (action$) =>
    action$.pipe(
        ofType(HANDLE_RESET),
        map((action) => {
                return {
                    type: RESET,
                };
            }
        )
    );

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
        })
    );

const rootEpic = combineEpics(handleChangeLanguageEpic);

export default rootEpic;
