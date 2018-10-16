import { GET_USER_ICON_REQUEST, GET_USER_ICON_SUCCESS, GET_USER_ICON_FAILURE } from "../actions/UserActions";

const initialState = {
  hasLoaded: false,
  userIcon: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ICON_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case GET_USER_ICON_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        url: action.userIcon.url
      };
    case GET_USER_ICON_FAILURE:
      break;
    default:
      return state;
  }
};
