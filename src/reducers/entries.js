import {
  GET_ENTRY_REQUEST,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILURE,
  POST_ENTRY_REQUEST,
  POST_ENTRY_SUCCESS,
  POST_ENTRY_FAILURE,
  PRELOAD_ENTRIES,
  SET_ENTRY_BOOKMARKED,
  ENTRY_DID_MOUNT,
  ENTRY_WILL_UNMOUNT
} from "../actions/EntryActions";

import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE
} from "../actions/CommentActions";

const initialState = {
  hasLoaded: false,
  state: "",
  entries: {},
  entry: null,
  url: "",
  res: null,
  didMount: false
};

export default (state = initialState, action) => {
  switch (action.type) {
  case GET_ENTRY_REQUEST: {
    const entryPreloaded =
        state.entries && action.id in state.entries ? true : false;
    return {
      ...state,
      hasLoaded: entryPreloaded,
      entry: entryPreloaded ? state.entries[action.id] : null
    };
  }
  case GET_ENTRY_SUCCESS:
    return {
      ...state,
      hasLoaded: true,
      entries: Object.assign(state.entries, { [action.id]: action.entry }),
      entry: action.entry
    };
  case GET_ENTRY_FAILURE:
    return state;
  case PRELOAD_ENTRIES: {
    const ObjectToDictById = array => {
      let x = {};
      array.forEach(val => {
        x[val.id] = val;
      });
      return x;
    };
    return {
      ...state,
      entries: Object.assign(
        state.entries,
        ObjectToDictById(action.trend.data)
      )
    };
  }
  case POST_ENTRY_REQUEST:
    return {
      ...state,
      state: "posting"
    };
  case POST_ENTRY_SUCCESS:
    return {
      ...state,
      state: "success",
      url: action.url,
      res: action.res
    };
  case POST_ENTRY_FAILURE:
    return {
      ...state,
      state: "failure"
    };
  case SET_ENTRY_BOOKMARKED:
    return {
      ...state,
      entry: {
        ...state.entry,
        "bookmarked?": action.bookmarked
      }
    };
  case GET_COMMENTS_REQUEST:
    return {
      ...state
    };
  case GET_COMMENTS_SUCCESS:
    return {
      ...state,
      entry: {
        ...state.entry,
        comments: action.comments.data
      }
    };
  case GET_COMMENTS_FAILURE:
    return {
      ...state
    };
  case ENTRY_DID_MOUNT:
    return {
      ...state,
      didMount: true
    };
  case ENTRY_WILL_UNMOUNT:
    return {
      ...state,
      didMount: false
    };
  default:
    return state;
  }
};
