import {
  POST_STAR_REQUEST,
  POST_STAR_SUCCESS,
  POST_STAR_FAILURE,
  DELETE_STAR_REQUEST,
  DELETE_STAR_SUCCESS,
  DELETE_STAR_FAILURE
} from "../actions/StarActions";

const initialState = {
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_STAR_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case POST_STAR_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case POST_STAR_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_STAR_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_STAR_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_STAR_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
