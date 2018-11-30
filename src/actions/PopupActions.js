export const SET_POPUP_MODE = "SET_POPUP_MODE";

export const setPopupMode = mode => dispatch => {
  dispatch({
    type: SET_POPUP_MODE,
    mode: mode
  });
};
