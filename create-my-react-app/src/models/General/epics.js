import { map } from "rxjs/operators";
import { ofType, combineEpics } from "redux-observable";

import { RESET, HANDLE_RESET } from "./actions";

const handleResetEpic = (action$) =>
  action$.pipe(
    ofType(HANDLE_RESET),
    map(() => {
      return {
        type: RESET,
      };
    })
  );

const generalEpics = combineEpics(handleResetEpic);

export default generalEpics;
