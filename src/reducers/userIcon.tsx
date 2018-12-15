import { DeepReadonly } from "utility-types";
import { GET_USER_ICON_FAILURE, GET_USER_ICON_REQUEST, GET_USER_ICON_SUCCESS } from "../actions/UserActions";

export type UserIcon = DeepReadonly<{
  hasLoaded: boolean;
  userIcon: string | null;
  url: URL | null;
}>;

const initialState: UserIcon = {
  hasLoaded: false,
  userIcon: null,
  url: null,
};

export default (state = initialState, action: any): UserIcon => {
  switch (action.type) {
    case GET_USER_ICON_REQUEST:
      return {
        ...state,
        hasLoaded: false,
      };
    case GET_USER_ICON_SUCCESS:
      return {
        ...state,
        hasLoaded: true,
        url: action.userIcon.url || null,
      };
    case GET_USER_ICON_FAILURE:
      return {
        ...state,
        hasLoaded: true,
        url: null,
      };
    default:
      return state;
  }
};
