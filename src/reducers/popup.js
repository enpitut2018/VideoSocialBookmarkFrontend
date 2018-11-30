import { SET_POPUP_MODE } from "../actions/PopupActions";

const initialState = {
  mode: "none"
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_POPUP_MODE:
    return {
      ...state,
      mode: action.mode
    };
  default:
    return state;
  }
};
