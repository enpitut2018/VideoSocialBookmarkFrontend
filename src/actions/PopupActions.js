export const SET_PAGE_ENTRY = "SET_PAGE_ENTRY";
export const SET_POPUP_ENTRY = "SET_POPUP_ENTRY";
export const DELETE_PAGE_ENTRY = "DELETE_PAGE_ENTRY";
export const DELETE_POPUP_ENTRY = "DELETE_POPUP_ENTRY";
export const POPUP_PLAY = "POPUP_PLAY";
export const POPUP_PAUSE = "POPUP_PAUSE";
export const POPUP_STOP = "POPUP_STOP";

export const play = page_or_popup => dispatch => {
  dispatch({type: POPUP_PLAY, page_or_popup: page_or_popup});
  if(page_or_popup === "page") dispatch(deletePopupEntry());
};

export const pause = page_or_popup => dispatch => {
  dispatch({type: POPUP_PAUSE, page_or_popup: page_or_popup});
};

export const stop = page_or_popup => dispatch => {
  dispatch({type: POPUP_STOP, page_or_popup: page_or_popup});
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

export const deletePageEntry = () => dispatch => {
  dispatch({type: DELETE_PAGE_ENTRY});
};

export const deletePopupEntry = () => dispatch => {
  dispatch({type: DELETE_POPUP_ENTRY});
};
