import { DeepReadonly } from "utility-types";
import { SEARCH_ENTRY_FAILURE, SEARCH_ENTRY_REQUEST, SEARCH_ENTRY_SUCCESS } from "../actions/SearchActions";
import { ErrorMessage } from "../types";

type Entry = any; // Entry id is better

export type Search = DeepReadonly<{
  hasLoaded: boolean;
  entries: Entry[] | null;
  error: ErrorMessage | null;
}>;

const initialState: Search = {
  hasLoaded: false,
  entries: null,
  error: null,
};

export default (state = initialState, action: any): Search => {
  switch (action.type) {
    case SEARCH_ENTRY_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case SEARCH_ENTRY_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        entries: action.result,
      };
    case SEARCH_ENTRY_FAILURE:
      return {
        ...state,
        hasLoaded: false,
        error: action.error,
      };
    default:
      return state;
  }
};
