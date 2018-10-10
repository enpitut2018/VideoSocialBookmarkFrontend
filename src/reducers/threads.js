import { GET_THREAD } from "../actions/ThreadActions";

const initialState = {
  hasLoaded: false,
  url: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_THREAD:
      return {
        ...state,
        hasLoaded: true,
        url: action.url
      };
    default:
      return state;
  }
};
