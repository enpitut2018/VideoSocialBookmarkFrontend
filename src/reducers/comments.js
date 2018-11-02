import {
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE
} from "../actions/CommentActions";

const initialState = {
  state: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
  case POST_COMMENT_REQUEST:
    return {
      ...state,
      state: "posting"
    };
  case POST_COMMENT_SUCCESS:
    return {
      ...state,
      state: "success"
    };
  case POST_COMMENT_FAILURE:
    return {
      ...state,
      state: "failed"
    };

  default:
    return state;
  }
};
