export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const HANDLE_CHANGE_LANGUAGE = "HANDLE_CHANGE_LANGUAGE";

export const handleChangeLanguage = (payload) => ({
  type: HANDLE_CHANGE_LANGUAGE,
  payload,
});
