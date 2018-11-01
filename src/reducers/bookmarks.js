import {
  POST_BOOKMARK_REQUEST,
  POST_BOOKMARK_SUCCESS,
  POST_BOOKMARK_FAILURE
} from "../actions/BookmarkActions";

const initialState = {
  state: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_BOOKMARK_REQUEST:
      return {
        ...state,
        state: "posting"
      };
    case POST_BOOKMARK_SUCCESS:
      return {
        ...state,
        state: "success"
      };
    case POST_BOOKMARK_FAILURE:
      return {
        ...state,
        state: "failed"
      };

    default:
      return state;
  }
};
