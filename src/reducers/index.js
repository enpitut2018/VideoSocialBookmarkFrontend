import bookmarks from "./bookmarks";
import entries from "./entries";
import trend from "./trend";
import user from "./user";
import userIcon from "./userIcon";
import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";

const app = combineReducers({
  bookmarks,
  entries,
  trend,
  user,
  userIcon,
  reduxTokenAuth: reduxTokenAuthReducer
});

export default app;
