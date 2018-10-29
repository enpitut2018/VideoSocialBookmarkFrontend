import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_BOOKMARKS_REQUEST,
  GET_USER_BOOKMARKS_SUCCESS,
  GET_USER_BOOKMARKS_FAILURE
} from "../actions/UserActions";

const initialState = {
  hasLoaded: false,
  hasBookmarkLoaded: false,
  user: "",
  bookmarks: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BOOKMARKS_REQUEST:
      return {
        ...state,
        hasBookmarkLoaded: false
      };
    case GET_USER_BOOKMARKS_SUCCESS:
      return {
        ...state,
        hasBookmarkLoaded: true,
        bookmarks: action.bookmarks
      };
    case GET_USER_BOOKMARKS_FAILURE:
      return {
        ...state,
        hasBookmarkLoaded: true
      };
    case GET_USER_REQUEST:
      return {
        ...state,
        hasLoaded: false
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        user: action.user
      };
    case GET_USER_FAILURE:
      return state;
    default:
      return state;
  }
};
