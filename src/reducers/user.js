import { GET_USER } from "../actions/UserActions";

const initialState = {
  hasLoaded: false,
  user: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        hasLoaded: true,
        user: action.user
      };
    default:
      return state;
  }
};
