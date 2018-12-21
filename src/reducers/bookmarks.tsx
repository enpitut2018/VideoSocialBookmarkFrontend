import { DeepReadonly } from "utility-types";
import {
  DELETE_BOOKMARK_FAILURE,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
  POST_BOOKMARK_FAILURE,
  POST_BOOKMARK_REQUEST,
  POST_BOOKMARK_SUCCESS,
} from "../actions/BookmarkActions";

export type Bookmarks = DeepReadonly<{
  state: "" | "posting" | "success" | "failed" | "deleting";
}>;

const initialState: Bookmarks = {
  state: "",
};

export default (state = initialState, action: any): Bookmarks => {
  switch (action.type) {
    case POST_BOOKMARK_REQUEST:
      return {
        ...state,
        state: "posting",
      };
    case POST_BOOKMARK_SUCCESS:
      return {
        ...state,
        state: "success",
      };
    case POST_BOOKMARK_FAILURE:
      return {
        ...state,
        state: "failed",
      };
    case DELETE_BOOKMARK_REQUEST:
      return {
        ...state,
        state: "deleting",
      };
    case DELETE_BOOKMARK_SUCCESS:
      return {
        ...state,
        state: "success",
      };
    case DELETE_BOOKMARK_FAILURE:
      return {
        ...state,
        state: "failed",
      };

    default:
      return state;
  }
};
