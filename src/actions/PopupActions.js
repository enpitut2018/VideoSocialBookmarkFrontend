export const SET_PAGE_ENTRY = "SET_PAGE_ENTRY";
export const SET_POPUP_ENTRY = "SET_POPUP_ENTRY";
export const POPUP_PLAY = "POPUP_PLAY";
export const POPUP_PAUSE = "POPUP_PAUSE";
export const POPUP_STOP = "POPUP_STOP";

export const play = () => dispatch => {
  dispatch({type: POPUP_PLAY});
};

export const pause = () => dispatch => {
  dispatch({type: POPUP_PLAY});
};

export const stop = () => dispatch => {
  dispatch({type: POPUP_PLAY});
};

export const setPageEntry = entry => dispatch => {
  dispatch({
    type: SET_PAGE_ENTRY,
    entry: entry
  });
};

export const setPopupEntry = entry => dispatch => {
  dispatch({
    type: SET_POPUP_ENTRY,
    entry: entry
  });
};
