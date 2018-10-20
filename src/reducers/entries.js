import {
  GET_ENTRY_REQUEST,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILURE
} from "../actions/EntryActions";

const initialState = {
  hasLoaded: false,
  url: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY_REQUEST:
      return {
        ...state,
        hasLoaded: false
      };
    case GET_ENTRY_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        entry: action.entry
      };
    case GET_ENTRY_FAILURE:
      return state;
    default:
      return state;
  }
};
