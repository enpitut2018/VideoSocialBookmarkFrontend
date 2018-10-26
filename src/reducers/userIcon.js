import {
  GET_USER_ICON_REQUEST,
  GET_USER_ICON_SUCCESS,
  GET_USER_ICON_FAILURE
} from "../actions/UserActions";
import userIcon from "../assets/images/usericon.svg";

const initialState = {
  hasLoaded: false,
  userIcon: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ICON_REQUEST:
      return {
        ...state,
        hasLoaded: false
      };
    case GET_USER_ICON_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        url: action.userIcon.url || userIcon
      };
    case GET_USER_ICON_FAILURE:
      return {
        ...state,
        hasLoaded: true,
        url: userIcon
      };
    default:
      return state;
  }
};
