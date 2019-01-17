import { DeepReadonly } from "utility-types";
import { POST_COMMENT_FAILURE, POST_COMMENT_REQUEST, POST_COMMENT_SUCCESS } from "../actions/CommentActions";

export type Comments = DeepReadonly<{
  state: "" | "posting" | "success" | "failed";
}>;

const initialState: Comments = {
  state: "",
};

export default (state = initialState, action: any): Comments => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        ...state,
        state: "posting",
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        state: "success",
      };
    case POST_COMMENT_FAILURE:
      return {
        ...state,
        state: "failed",
      };

    default:
      return state;
  }
};
