import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE
} from "../actions/CommentActions";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
