import { GET_THREAD_REQUEST, GET_THREAD_SUCCESS, GET_THREAD_FAILURE } from "../actions/ThreadActions";

const initialState = {
  hasLoaded: false,
  url: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_THREAD_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case GET_THREAD_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        thread: action.thread
      };
    case GET_THREAD_FAILURE:
      break;
    default:
      return state;
  }
};
