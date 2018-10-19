import {
  POST_BOOKMARK_REQUEST,
  POST_BOOKMARK_SUCCESS,
  POST_BOOKMARK_FAILURE
} from "../actions/BookmarkActions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_BOOKMARK_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case POST_BOOKMARK_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case POST_BOOKMARK_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
