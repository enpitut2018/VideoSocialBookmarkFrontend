import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "../actions/UserActions";

const initialState = {
  hasLoaded: false,
  user: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        user: action.user
      };
    case GET_USER_FAILURE:
      break;
    default:
      return state;
  }
};
