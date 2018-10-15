import { GET_USER_ICON } from "../actions/UserActions";

const initialState = {
  hasLoaded: false,
  userIcon: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ICON:
      return {
        ...state,
        hasLoaded: true,
        url: action.userIcon.url
      };
    default:
      return state;
  }
};
