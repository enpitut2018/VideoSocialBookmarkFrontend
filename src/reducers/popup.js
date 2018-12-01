import { SET_PAGE_ENTRY, SET_POPUP_ENTRY, POPUP_PLAY, POPUP_PAUSE, POPUP_STOP } from "../actions/PopupActions";

const initialState = {
  pageEntry: null,
  popupEntry: null,
  flip: -1,
  videoStatus: "standBy"
};

export default (state = initialState, action) => {
  switch (action.type) {
  case POPUP_PLAY:
    return {
      ...state,
      videoStatus: "playing"
    };
  case POPUP_PAUSE:
    return {
      ...state,
      videoStatus: "pausing"
    };
  case POPUP_STOP:
    return {
      ...state,
      videoStatus: "standBy"
    };
  case SET_PAGE_ENTRY:
    return {
      ...state,
      pageEntry: action.entry
    };
  case SET_POPUP_ENTRY:
    return {
      ...state,
      popupEntry: action.entry,
      flip: -1 * state.flip
    };
  default:
    return state;
  }
};
