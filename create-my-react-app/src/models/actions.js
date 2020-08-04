//? GENERAL
export const RESET = "RESET";
export const HANDLE_RESET = "RESET";

//? Language Reducer
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const HANDLE_CHANGE_LANGUAGE = "HANDLE_CHANGE_LANGUAGE";

//? GENEREAL
export const handleReset = () => ({
    type: HANDLE_RESET,
});

//? Language Reducer
export const handleChangeLanguage = (payload) => ({
    type: HANDLE_CHANGE_LANGUAGE,
    payload,
});
