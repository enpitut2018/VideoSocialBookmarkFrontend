import bookmarks from "./bookmarks";
import entries from "./entries";
import ranking from "./ranking";
import user from "./user";
import userIcon from "./userIcon";
import { combineReducers } from "redux";
import { reduxTokenAuthReducer } from "redux-token-auth";

const app = combineReducers({
  bookmarks,
  entries,
  ranking,
  user,
  userIcon,
  reduxTokenAuth: reduxTokenAuthReducer
});

export default app;
