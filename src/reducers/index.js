import threads from "./threads";
import ranking from "./ranking";
import user from "./user";
import userIcon from "./userIcon";
import { combineReducers } from "redux";

const app = combineReducers({
  threads,
  ranking,
  user,
  userIcon
});

export default app;
