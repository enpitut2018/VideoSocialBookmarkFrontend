import {
  SEARCH_ENTRY_REQUEST,
  SEARCH_ENTRY_SUCCESS,
  SEARCH_ENTRY_FAILURE
} from "../actions/SearchActions";

const initialState = {
  hasLoaded: false,
  entries: null
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_ENTRY_REQUEST:
    return {
      ...state,
      hasLoaded: false
    };
  case SEARCH_ENTRY_SUCCESS:
    return {
      ...state,
      hasLoaded: true,
      entries: action.result
    };
  case SEARCH_ENTRY_FAILURE:
    return {
      ...state,
      hasLoaded: false,
      error: action.error
    };
  default:
    return state;
  }
};
