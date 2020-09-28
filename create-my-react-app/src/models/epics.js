import { combineEpics } from "redux-observable";

import generalEpics from "./General/epics";
import languageEpics from "./Language/epics";

const rootEpic = combineEpics(generalEpics, languageEpics);

export default rootEpic;
