import {
  GET_ENTRY_REQUEST,
  GET_ENTRY_SUCCESS,
  GET_ENTRY_FAILURE,
  PRELOAD_ENTRIES
} from "../actions/EntryActions";

const initialState = {
  hasLoaded: false,
  entries: {},
  entry: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ENTRY_REQUEST:
      const entryPreloaded = state.entries && (action.id in state.entries) ? true : false
      return {
        ...state,
        hasLoaded: entryPreloaded,
        entry: entryPreloaded ? state.entries[action.id] : null
      };
    case GET_ENTRY_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        entries: Object.assign(state.entries, {[action.id]: action.entry}),
        entry: action.entry
      };
    case GET_ENTRY_FAILURE:
      return state;
    case PRELOAD_ENTRIES:
      const ObjectToDictById = array => {
        let x = {};
        array.forEach( val => {
          x[val.id] = val;
        });
        return x;
      }
      return {
        ...state,
        entries: Object.assign(state.entries, ObjectToDictById(action.entries))
      }
    default:
      return state;
  }
};
